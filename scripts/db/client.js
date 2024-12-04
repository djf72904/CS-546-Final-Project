import {createComment, getAllCommentsForPost, getComments} from "./data/comments.js";
import {createFriends, deleteFriends} from "./data/friends.js";
import {createPost, getAllPosts, getAllPostsByUser, getPost} from "./data/posts.js";
import {deleteProfileAndUser, editDisplayName} from "./data/profiles.js";
import {createTest, getAllTests, getAllTestsByUser, getTests} from "./data/tests.js";
import {getAllSongs, getSong} from "./data/songs.js";

const Database = {
    comments: {
        getComments,
        getAllCommentsForPost,
        createComment,

    },
    friends: {
        createFriends,
        deleteFriends,
    },
    posts: {
        getPost,
        getAllPosts,
        getAllPostsByUser,
        createPost
    },
    profiles: {
        editDisplayName,
        deleteProfileAndUser,
    },
    songs: {
        getAllSongs,
        getSong,
    },
    tests: {
        getAllTests,
        getTests,
        getAllTestsByUser,
        createTest,
    },
}

export default Database