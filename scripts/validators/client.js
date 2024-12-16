import {
    createCommentValidator,
    getAllCommentsForPostValidator,
    getCommentsValidator
} from "./comments.js";
import {createFriendsValidator, deleteFriendsValidator} from "./friends.js";
import {createPostValidator, getAllPostsByUserValidator, getPostsValidator} from "./posts.js";
import {deleteProfileAndUserValidator, editDisplayNameValidator, updateProfileStatsValidator} from "./profiles.js";
import {getSongValidator} from "./songs.js";
import {createTestValidator, getAllTestsByUserValidator, getTestsValidator} from "./tests.js";

const Validators = {
    comments: {
        createCommentValidator,
        getCommentsValidator,
        getAllCommentsForPostValidator,
    },
    friends: {
        createFriendsValidator,
        deleteFriendsValidator,
    },
    posts: {
        getPostsValidator,
        getAllPostsByUserValidator,
        createPostValidator
    },
    profiles: {
        editDisplayNameValidator,
        deleteProfileAndUserValidator,
        updateProfileStatsValidator
    },
    songs: {
        getSongValidator
    },
    tests: {
        getTestsValidator,
        getAllTestsByUserValidator,
        createTestValidator
    },
}

export default Validators