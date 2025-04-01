import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
    postPicture: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
},
    {
        timestamps: true,
    }
);

export const Post = mongoose.model("Post", postSchema);
