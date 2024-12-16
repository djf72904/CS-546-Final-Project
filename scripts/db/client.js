import {createComment, getAllCommentsForPost, getComments, updateComment} from "./data/comments.js";
import {createFriends, deleteFriends, getFriends} from "./data/friends.js";
import {createPost, getAllPosts, getAllPostsByUser, getPost} from "./data/posts.js";
import {getProfile, deleteProfileAndUser, editDisplayName, updateProfileStats, getUserByDisplayName} from "./data/profiles.js";
import {createTest, getAllTests, getAllTestsByUser, getTest} from "./data/tests.js";
import {getAllSongs, getSong} from "./data/songs.js";

const Database = {
    comments: {
        getComments,
        getAllCommentsForPost,
        createComment,
        updateComment

    },
    friends: {
        createFriends,
        deleteFriends,
        getFriends
    },
    posts: {
        getPost,
        getAllPosts,
        getAllPostsByUser,
        createPost,

    },
    profiles: {
        editDisplayName,
        deleteProfileAndUser,
        getProfile, 
        updateProfileStats,
        getUserByDisplayName
    },
    songs: {
        getAllSongs,
        getSong,
    },
    tests: {
        getAllTests,
        getTests: getTest,
        getAllTestsByUser,
        createTest,
    },
}

export default Database