import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const Schema = mongoose.Schema;


export const UsersSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4().toString(),
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
})

export const ProfilesSchema = new Schema({
    //primary key
    _id: {
        type: String,
        default: uuidv4().toString(),
    },
    display_name: {
        type: String,
        required: true
    },
    best_wpm: {
        type: Number,
        required: true,
        default: 0
    },
    avg_wpm: {
        type: Number,
        required: true,
        default: 0
    },
    max_level: {
        type: Number,
        required: true,
        default: 1
    },
    avg_accuracy: {
        type: Number,
        required: true,
        default: 0
    },
    common_missed_words: {
        type: Object,
        required: true,
        default: []
    },
    favorite_songs: {
        type: Object,
        required: true,
        default: {
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
    }
})


export const PostsSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4().toString(),
    },
    user_id: {
        type: String,
        ref: 'User',
        required: true
    },
    //unix timestamp
    timestamp: {
        type: Number,
        default: Date.now()
    },
    test_id: {
        type: String,
        ref: 'TestSchema',
        required: true
    },
    content: {
        type: String,
        required: false,
        maxlength: 1000
    },
});

export const CommentsSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4().toString(),
    },
    user_id: {
        type: String,
        ref: 'User',
        required: true
    },
    //unix timestamp
    timestamp: {
        type: Number,
        default: Date.now()
    },
    post_id: {
        type: String,
        ref: 'Post',
        required: true
    },
    content: {
        type: String,
        required: true,
        maxlength: 1000
    },
});

export const TestSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4().toString(),
    },
    user_id: {
        type: String,
        ref: 'User',
        required: true
    },
    //unix timestamp
    timestamp: {
        type: Number,
        default: Date.now()
    },
    level_reached: {
        type: Number,
        required: true,
        default: 1
    },
    wpm: {
        type: Number,
        required: true,
        default: 0
    },
    song: {
        type: Object,
        required: true,
        default: 0
    },
    options: {
        type: Object,
        required: true,
        default: {}
    },
    missed_words: {
        type: [String],
        required: true,
        default: []
    },
    type: {
        type: String,
        required: true,
        default: 'test'
    },
    content: {
        type: String,
        required: false,
    },
    accuracy: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: false,
        default: 0
    },
    layout:{
        type: String,
        required: true,
        default: "qwerty"
    },
});

/*
export const SongSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4().toString(),
    },
    user_id: {
        type: String,
        required: true,
        maxlength: 1000
    },
    level: {
        type: String,
        required: true,
        maxlength: 1000
    },
    song: {
        type: Number,
        required: true,
        default: 0
    },
})
*/

export const FriendsSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4().toString(),
    },
    user_1: {
        type: String,
        ref: 'User',
        required: true
    },
    user_2: {
        type: String,
        ref: 'User',
        required: true
    },
});

export const User = mongoose.model('users', UsersSchema);
export const Friends = mongoose.model('Friends', FriendsSchema);
//export const Song = mongoose.model('Song', SongSchema);
export const Post = mongoose.model('Post', PostsSchema);
export const Comment = mongoose.model('Comment', CommentsSchema);
export const Test = mongoose.model('Test', TestSchema);
export const Profile = mongoose.model('Profile', ProfilesSchema);