import mongoose from 'mongoose';
import { User, Profile, Post, Comment, Test, Friend } from './scripts/db/config/schema.js'; // Replace './models' with the correct path to your models
import { v4 as uuidv4 } from 'uuid';
import {hashPassword} from "./scripts/handlers/authHandlers.js";
import connectToDatabase from "./config/mongoConnection.js";
import { songs } from "./songs.js";
import { levels } from "./constants.js";

async function seedDatabase() {

    await connectToDatabase()

    try {
        // Clear existing data
        await User.deleteMany();
        await Profile.deleteMany();
        await Post.deleteMany();
        await Comment.deleteMany();
        await Test.deleteMany();
        //await Song.deleteMany();
        await Friend.deleteMany();

        // Seed Users

        const users = Array.from({ length: 10 }).map(() => {
            const email = `user${Math.random().toString(36).substring(2, 10)}@example.com`;
            const pswd = Math.random().toString(36).substring(2, 10);
            console.log(email, pswd);
            return ({
                _id: uuidv4(),
                email: email,
                password: hashPassword(pswd),
            })
        })
        await User.insertMany(users);
        console.log('Users seeded');

        // Seed Profiles
        const profiles = users.map((user) => ({
            _id: user._id,
            display_name: `User_${Math.random().toString(36).substring(2, 8)}`,
            best_wpm: Math.floor(Math.random() * 141),
            avg_wpm: Math.floor(Math.random() * 100),
            max_level: Math.floor(Math.random() * 10) + 1,
            avg_accuracy: Math.random().toFixed(2) * 100,
            common_missed_words: ['the', 'example', 'word'],
            favorite_songs: {
                1:  0,
                2:  0,
                3:  0,
                4:  0,
                5:  0,
                6:  0,
                7:  0,
                8:  0,
                9:  0,
                10: 0}
        }));
        await Profile.insertMany(profiles);
        console.log('Profiles seeded');

        /*
        // Seed Songs
        const songs = Array.from({ length: 5 }).map(() => ({
            _id: uuidv4(),
            user_id: users[Math.floor(Math.random() * users.length)]._id,
            level: Math.floor(Math.random() * 10) + 1,
            song: Math.floor(Math.random() * 30) + 1,
        }));
        await Song.insertMany(songs);
        console.log('Songs seeded');
        */

        // Seed Tests
        const tests = users.map((user) => {
            const levelReached = Math.floor(Math.random() * 10) + 1;
            return {
                _id: uuidv4(),
                user_id: user._id,
                timestamp: Date.now(),
                level_reached: levelReached, 
                wpm: randomWpm(levelReached),
                song: randomSongForLevel(levelReached), 
                options: { difficulty: 'medium' },
                missed_words: ['Lorem'],
                type: 'test',
                content: 'Lorem ipsum test content.',
                accuracy: Math.floor(Math.random() * 101),
                time: Math.floor(Math.random() * 120) + 30,
                layout: 'qwerty',
            };
        });
        await Test.insertMany(tests);
        console.log('Tests seeded');

        // Seed Posts
        const posts = users.map((user) => ({
            _id: uuidv4(),
            user_id: user._id,
            timestamp: Date.now(),
            test_id: tests[Math.floor(Math.random() * tests.length)]._id,
            content: 'This is a sample post content.',
        }));
        await Post.insertMany(posts);
        console.log('Posts seeded');

        // Seed Comments
        const comments = posts.map((post) => ({
            _id: uuidv4(),
            user_id: users[Math.floor(Math.random() * users.length)]._id,
            timestamp: Date.now(),
            post_id: post._id,
            content: 'This is a sample comment.',
        }));
        await Comment.insertMany(comments);
        console.log('Comments seeded');

        // Seed Friends
        const friends = users.slice(0, users.length - 1).map((user, idx) => ({
            _id: uuidv4(),
            user_1: user._id,
            user_2: users[idx + 1]._id,
        }));
        await Friend.insertMany(friends);
        console.log('Friends seeded');

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await mongoose.connection.close();
        console.log('Connection closed');
    }
}

function randomWpm(level_reached) {
    const thisLevel = levels.find(l => l.level === level_reached);
    return Math.floor(Math.random() * (Number(thisLevel.upperBound) - Number(thisLevel.lowerBound) + 1)) + Number(thisLevel.lowerBound);
}

function randomSongForLevel(level_reached) {
    const filteredSongs = songs.filter(song => song.level === level_reached);
    const randomIndex = Math.floor(Math.random() * 3 + 1);
    const randomSong = filteredSongs[randomIndex];
    return {
        name: randomSong.name,
        link: randomSong.link,
        artist: randomSong.artist
    };
}

seedDatabase()