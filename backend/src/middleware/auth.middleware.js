const jwt = require('jsonwebtoken')
const redis = require('../config/cache')
/**
 * 
 * @name authUser
 * @description middleware to authenticate user by verifying the token in cookie
 * @access private
 */
async function authUser(req, res, next) {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'unauthorized'
            })
        }
        //NOTE - CHEKS TOKEN IS BLACK LIST OR NOT
        const isBlackListed = await redis.get(`blacklist_${token}`)
        if (isBlackListed) {
            return res.status(401).json({
                success: false,
                message: 'unauthorized'
            })
        }
        //NOTE -   { id: exiestUser._id, username: exiestUser.username, email: exiestUser.email },
        const decode = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decode
        next()
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            success: false,
            message: 'unauthorized'
        })

    }

}

module.exports = authUser