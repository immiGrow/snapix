import mongoose from "mongoose";

mongoose.set('strictQuery', false)

const UserDetails = new mongoose.Schema({

    username: {
        type: String,

        minlength: 3

    },
    email: {
        type: String,

        minlength: 3

    },
    password: {
        type: String,

        minlength: 3

    },
    rememberMe: {
        type: Boolean,
        default: true
    },
    about: {
        type: String,
        default: ""
    },
    website: {
        type: String,
        default: ""
    },

    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    profile_image: {
        type: String,
        default: ""
    },
    youtube: {
        type: String,
        default: ""
    },
    twitter: {
        type: String,
        default: ""
    },
    instagram: {
        type: String,
        default: ""
    },
    facebook: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    followers: {
        type: Array
    }




});
export default mongoose.models.Users || mongoose.model("Users", UserDetails)