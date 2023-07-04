import dbConnect from '../../../mongodb/db'
import Users from '../../../models/Users'
import bcrypt from 'bcryptjs';
dbConnect()
export default async function handlerForgetPassword(req, res) {
    if (req.method === "POST") {
        verifyUser(req, res);
    }
    if (req.method === "PUT") {
        changePassword(req, res);
    }
}
const verifyUser = async(req, res) => {
    const { email } = req.body;
    const findEmail = await Users.findOne({ email: email });
    if (!findEmail) {
        await res.status(401).json({
            success: false,
            message: "Unauthorized user, Login with correct credentials"
        })
    }
    await res.status(200).json({
        success: true,
        message: "User found"
    })

}
const changePassword = async(req, res) => {
    const { email, newPassword } = req.body
    let salt = await bcrypt.genSalt(10)
        // let oldSecPass = await bcrypt.hash(oldPassword, salt)
    let newSecPass = await bcrypt.hash(newPassword, salt)
    await Users.findOneAndUpdate({ email: email }, {
        $set: {
            password: newSecPass
        }
    }, {
        new: true
    })
    await res.status(200).json({
        success: true,
        message: "Password has changed successfully"
    })
}