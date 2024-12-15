//This file is responsible for handling all the database interactions for comments

import {Comment} from '../../db/config/schema.js';
import Validators from "../../validators/client.js";

export const createComment = async (post_id, data) => {
    // Should I do a try catch for erros?
    // VALIDATE:
    await Validators.comments.createCommentValidator(data);

    // CREATE COMMENT: Asynchronously creates a comment for a specified post
    const newComment = await new Comment({ post_id, ...data });
    await newComment.save();
    return newComment.toObject();
}

export const getComments = async (comment_id) => {
    // VALIDATE:
    Validators.comments.getCommentsValidator(comment_id);

    // GET COMMENT: Asynchronously retrieves comments associated with a specific comment ID.
    const comment = await Comment.find({ _id: comment_id });
    return comment.toObject;
}

export const getAllCommentsForPost = async (post_id) => {
    // VALIDATE:
    Validators.comments.getAllCommentsForPostValidator(post_id);

    // ALL COMMENTS: Retrieves all comments associated with a given post.
    const allComments = await Comment.find({post_id: post_id}).sort({ timestamp: -1 });
    return allComments.map(comment => comment.toObject()); // We should potentially add a cap to this
}

export const updateComment = async (comment_id, newContent) => {
    // VALIDATE
    // CHECK: comment_id is valid
    await Validators.comments.createCommentValidator(data);

    // CHECK: newContent is valid
    if (!newContent || newContent !== string || newContent.trim().length() === 0)
        throw 'updateComment Error: comment_id is required to be input and cannot be a nonempty string or string with just spaces to update a comment.';

    const updatedComment = await Comment.findByIdAndUpdate(
        comment_id,
        { content: newContent, timestamp: Date.now() },
        { new: true } // Return the updated document
    );

    return updatedComment;
}
