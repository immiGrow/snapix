import Authenticated from "../../../middleware/Authenticated"
import Notifications from "../../../models/Notifications"
import dbConnect from "../../../mongodb/db"

dbConnect()

export default function handlerOfNotifications(req, res) {
    if (req.method === "GET") {
        getAllNotifications(req, res)
    }
    if (req.method === "PUT") {
        markReadNotifications(req, res)
    }
    if (req.method === "DELETE") {
        deleteNotifications(req, res)
    }
}
const getAllNotifications = Authenticated(async(req, res) => {
    const notifications = await Notifications.find({ notifyTo: req.user }).populate([
        { path: 'notifyBy', select: 'username profile_image' },
        { path: 'notifyTo', select: 'username profile_image' }
    ])
    await res.status(200).json({
        success: true,
        notifications
    })
})

const markReadNotifications = Authenticated(async(req, res) => {

    const updatedNotification = await Notifications.updateMany({ notifyTo: req.user }, {
        $set: {
            status: "read"
        }
    }, { new: true })
    await res.status(200).json({
        success: true,
        updatedNotification
    })
})

const deleteNotifications = Authenticated(async(req, res) => {
    const { notifyId } = req.body
    const deleteNotification = await Notifications.findOneAndDelete({ _id: notifyId })
    await res.status(200).json({ success: true, message: "Notification has been deleted" })
})