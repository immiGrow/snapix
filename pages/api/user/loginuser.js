import bcrypt from 'bcryptjs';
import Users from '../../../models/Users';
import dbConnect from '../../../mongodb/db'
import jwt from 'jsonwebtoken';
dbConnect()
export default async function loginUser(req, res) {

    if (req.method === "POST") {
        const { email, password } = req.body
        if (!email || !password) {
            return res.json({
                success: false,
                message: "Please Login with correct credentials"
            })
        }

        try {
            const logUser = await Users.findOne({ email })
            if (!logUser) {
                return res.json({
                    success: false,
                    message: "Please Login with correct credentials"
                })
            }
            const passCompare = await bcrypt.compare(password, logUser.password)
            if (!passCompare) {
                return res.status(400).json({
                    success: false,
                    message: "Please Login with correct credentials"
                })
            }


            const data = {
                userId: logUser._id
            }
            const authtoken = await jwt.sign(data, process.env.JWT_SECRET)

            await res.status(200).json({
                success: true,
                authtoken,
            })

        } catch (error) {
            await res.status(400).json({
                success: false,
                message: "Couldn't login the user"
            })
        }





    }
}