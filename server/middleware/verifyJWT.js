const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden' })
            }

            req.user = decoded.UserInfo.username
            req.name = decoded.UserInfo.name
            req.address1 = decoded.UserInfo.address1
            req.city = decoded.UserInfo.city
            req.state = decoded.UserInfo.state
            req.zipCode = decoded.UserInfo.zipCode

            next()
        }
    )
}

module.exports = verifyJWT