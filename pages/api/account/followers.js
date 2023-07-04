import dbConnect from '../../../mongodb/db'
import Authenticated from '../../../middleware/Authenticated'
import Users from '../../../models/Users'
import Notifications from '../../../models/Notifications'
dbConnect()

export default function handlerFollowUser(req, res) {

    if (req.method === "PUT") {
        followuser(req, res);
    }
    if (req.method === "DELETE") {
        unfollowUser(req, res);
    }
}
const followuser = Authenticated(async(req, res) => {
    const { fUserId } = req.body

    const follow = await Users.findOneAndUpdate({ _id: fUserId }, {
            $push: {
                followers: req.user
            }
        }, {
            new: true
        })
        // Ramesh (whose profile was observed)  Ram (logged  In user )want to follow Ramesh Notification ---> TO(Ramesh that Ram has started following you)
    const loggedInUser = await Users.findOne({ _id: req.user }, { password: 0 })
    const genrt = await new Notifications({
        notifyBy: req.user,
        notifyTo: fUserId, // to logged in user
        notifiedAt: new Date(),
        message: `${loggedInUser.username} has started following you`
    }).save()

    await res.status(200).json({
        success: true,
        message: "Followed successfully",
        user: follow
    })


})
const unfollowUser = Authenticated(async(req, res) => {
    const { fUserId } = req.body

    const unfollow = await Users.findOneAndUpdate({ _id: fUserId }, {
        $pull: {
            followers: req.user
        }
    }, {
        new: true
    })
    await res.status(200).json({
        success: true,
        message: "Unfollowed successfully",
        user: unfollow
    })

})