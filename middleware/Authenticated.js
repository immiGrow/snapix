import jwt from 'jsonwebtoken';
export default function Authenticated(icomponent) {
    return (req, res) => {
        const { authorization } = req.headers
        console.log(authorization)
        if (!authorization) {
            return res.status(401).json({
                error: "Invalid token",
                message: "First you must logged in"
            })
        }

        const data = jwt.verify(authorization, process.env.JWT_SECRET)
        req.user = data.userId
            // console.log(req.user, data)

        return icomponent(req, res)
    }
}