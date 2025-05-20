const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const RFSECRET = process.env.JWT_REFRESH_SECRET;

const refreshTokenStorage = []

function generateToken(payload, expires = '15m',secret = SECRET ){
    const signature =  jwt.sign({payload}, secret, { expiresIn: expires});
    return signature
}

function verifyToken(token){
    return jwt.verify(token, SECRET)
}

function generateRefreshToken(payload, expires = '7Days'){
    const refreshToken = generateToken(payload,expires, RFSECRET)
    refreshTokenStorage.push(refreshToken)   
    return refreshToken
}

module.exports = {generateToken, verifyToken, generateRefreshToken};