import dbConnect from '../../../mongodb/db'

import Users from '../../../models/Users'
dbConnect()
export default async function handlerGetAllUsers(req, res) {
    const totalUsers = await Users.estimatedDocumentCount()
    const allUsers = await Users.find({}).sort({ createdAt: 1 }).limit(6)
    await res.status(200).json({
        success: true,
        allusers: allUsers,
        totalUsers: totalUsers
    })
}