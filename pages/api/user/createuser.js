import dbConnect from '../../../mongodb/db'
import Users from '../../../models/Users'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Collections from '../../../models/Collections';




dbConnect()

export default function createuser(req, res) {
    if (req.method === "GET") {
        res.json({
            message: "Everything is ok"
        })
    }
    if (req.method === "POST") {
        createNewUser(req, res)
    }
}
const createNewUser = async(req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.json({
            success: false,
            message: "Please add all fields"
        })
    }
    try {
        const findUser = await Users.findOne({
            email

        })
        if (findUser) {
            return res.json({
                success: false,
                message: "Sorry, A user with this email already exists"
            })
        }


        let salt = await bcrypt.genSalt(10)
        let secpass = await bcrypt.hash(password, salt)
        const newAddedUser = await new Users({
            username,
            email,
            password: secpass,
            createdAt: new Date()

        }).save()

        await Collections({
            user: newAddedUser._id,
            title: "My Collection",
            description: "",
            curatedBy: newAddedUser.username
        }).save()

        const data = {
            userId: newAddedUser._id
        }
        const authtoken = await jwt.sign(data, process.env.JWT_SECRET)

        await res.status(200).json({
            success: true,
            authtoken,

        })
    } catch (error) {
        await res.status(400).json({
            success: false,
            message: "Couldn't create user's account"
        })
    }

}