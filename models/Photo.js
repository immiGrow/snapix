import mongoose from "mongoose";
import Users from "./Users";

mongoose.set('strictQuery', false)
const { ObjectId } = mongoose.Schema.Types
const PhotoDetails = new mongoose.Schema({
    title: {
        type: String,
    },
    blur_hash: {
        type: String
    },
    tags: {
        type: Array
    },
    url: {
        type: String
    },
    category: {
        type: String
    },
    user: {
        type: ObjectId,
        ref: "Users"
    },
    createdAt: {
        type: Date,


    },
    likes: [{
        type: ObjectId,
        ref: "Users"
    }],
    views: {
        type: Number,
        default: 0
    },
    downloads: {
        type: Number,
        default: 0
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    }


});
export default mongoose.models.Photo || mongoose.model("Photo", PhotoDetails)