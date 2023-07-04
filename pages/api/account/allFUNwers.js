import Authenticated from "../../../middleware/Authenticated"
import Users from "../../../models/Users"
import dbConnect from "../../../mongodb/db"
dbConnect()
export default function AllFollowersAndUnfollowers(req, res) {

    if (req.method === 'GET') {
        sendAllFUNwers(req, res)
    }

}

const sendAllFUNwers = Authenticated(async(req, res) => {

    const followers = [] // Show Id's of Users
    const followings = []
    const logedInUser = await Users.findOne({ _id: req.user }, { password: 0, email: 0 })
    const arr = logedInUser.followers
    for (let i = 0; i < arr.length; i++) {
        const follower = await Users.findOne({ _id: arr[i] })
        followers.push(follower)

    }
    const allUsers = await Users.find({}, { password: 0, email: 0 })
    const arrOfUsers = allUsers.map((user) => {
        user.followers.map((f) => {
            if (f === req.user) {
                followings.push(user)
            } else {

            }
        })
    })
    await res.status(200).json({
        success: true,
        followers,
        followings

    })
})