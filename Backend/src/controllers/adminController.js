const {generateToken, generateRefreshToken} = require('../utils/jwt')

const { default: mongoose } = require('mongoose');
const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const cookie = require('cookie');
const { verify } = require('jsonwebtoken');
const {verifyToken} = require('../controllers/middlewareController')




class AdminController {
   
    async loginAdmin(req, res, next){
        try{
            const {username, password} = req.body
            const admin = await Admin.findOne({username})
            if(!admin){
                res.clearCookie('refreshToken', {
                    httpOnly: true,
                    secure: false,
                    sameSite: 'strict',
                    path: '/'
                })  
                return res.status(404).json("not found")
            } 
            const isMatch = await bcrypt.compare(password,admin.password)
            
            if(!isMatch){
                 res.clearCookie('refreshToken', {
                    httpOnly: true,
                    secure: false,
                    sameSite: 'strict',
                    path: '/'
                })  
                return res.status(404).json("wrong password")
            } 
            const data = {
                id: admin._id,
                username: admin.username,
            }
            const loginToken = generateToken(data, '30s')
            const refreshToken = generateRefreshToken(data, '1Day')
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: false,
                path: '/',
                sameSite: 'strict'
            } )
            res.status(200).json({
                message: "login successfull",
                accessToken: loginToken,
                data: data
            })
        }
        catch(error){
            res.status(500).json("server error after loging")
        }
    }
   

    async getDataAdmin(req, res, next){
        try{
            const allData = await Admin.find()
            if(!allData){
                return res.status(404).json("not found")
            }
            res.status(200).json(allData)
        }
        catch(error){
            res.status(500).json("server error")
        } 
        finally{
            mongoose.connection.close()
        }
    }
    async createAdmin(username, plainpassword){
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(plainpassword, saltRounds)

        const admin =  new Admin({
            username,
            password:hashedPassword
        });

        try{
            await admin.save()
            console.log('create admin successfull')
        } catch(error){
            console.log('create ad failed', error)
        } finally{
            mongoose.connection.close()
        }
    }
    async logoutAdmin(req, res, next){
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            path: '/'
        })  
        res.removeHeader('token')
        return res.status(200).json('log out successfully')
        
    }

    


    
}



module.exports = new AdminController