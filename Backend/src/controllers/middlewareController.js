const jwt = require('jsonwebtoken');
const { generateToken, generateRefreshToken } = require('../utils/jwt');

class MiddlewareController {
    
    async verifyToken(req, res, next){
        try{
            const token = req.headers.token;
            if(!token){

                return res.status(401).json('token not found')
            } 
            else{
                const accessToken = token.split(' ')[1]
                jwt.verify(accessToken,process.env.JWT_SECRET, (err, user) => {
                    if(err){
                        console.log(err)
                        return res.status(401).json('token is not valid')
                    } else{
                        req.user = user
                        next()
                    }

                })
            }
        }
        catch(error){
            return res.status(500).json('server auth error')
        }
        

    }
    async requestRefreshToken(req, res, next){
        try {
            const token = req.cookies.refreshToken;
            if(!token){
                res.status(401).json('your account is not authentication')
            } else{
                jwt.verify(token,process.env.JWT_REFRESH_SECRET, (err, user)=>{
                    if(err){
                        return res.status(401).json('RFtoken is not valid')
                    } else{
                        const newAccessToken = generateToken(user);
                        const newRefreshToken = generateRefreshToken(user)
                        res.cookie('refreshToken',newRefreshToken, {
                        httpOnly: true,
                        secure: false,
                        path: '/',
                        sameSite: 'strict'
                    } )
                        req.user = user
                        res.status(200).json({accessToken: newAccessToken} )
                    }
                })
            }
        } 
        catch (error) {
            return res.status(500).json('server can not verify token')
        }
    }
}

module.exports = new MiddlewareController