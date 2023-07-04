import mongoose from "mongoose";
// notifyBy---> The user who is logged in and has uploaded the photo then send request tob upload api then model schema generate of notification ---> notifyBy-->(User who is logged in _id), notifyTo-->(Followers _id)
mongoose.set('strictQuery', false)
mongoose.set('strictPopulate', false)
const { ObjectId } = mongoose.Schema.Types
const NotificationDetails = new mongoose.Schema({

    notifyBy: {
        type: ObjectId,
        ref: "Users"
    },
    notifyTo: {
        type: ObjectId,
        ref: "Users"
    },
    status: {
        type: "String",
        default: "unread"
    },
    notifiedAt: {
        type: Date,
        default: new Date()
    },
    message: {
        type: String,
        default: ""
    }



});
export default mongoose.models.Notifications || mongoose.model("Notifications", NotificationDetails)