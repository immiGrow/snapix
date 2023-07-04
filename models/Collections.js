import mongoose from "mongoose";
import Photo from "./Photo";
import Users from "./Users";

mongoose.set('strictQuery', false)
const { ObjectId } = mongoose.Schema.Types
const CltnDetails = new mongoose.Schema({
    title: {
        type: String,
    },
    cover_images: [{
        source: { type: String, }
    }],
    description: {
        type: String
    },
    curatedBy: {
        type: String
    },
    views: {
        type: Number,
        default: 0
    },
    user: {
        type: ObjectId,
        ref: "Users"
    },
    Images: [{
        ImageId: {
            type: ObjectId,
            ref: "Photo"
        }
    }],





});
export default mongoose.models.Collections || mongoose.model("Collections", CltnDetails)