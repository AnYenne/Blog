const express = require("express");
const router = express.Router()

const AdminController = require('../controllers/adminController');
const middlewareController = require("../controllers/middlewareController");
const adminController = require("../controllers/adminController");

router.get('/',middlewareController.verifyToken, AdminController.getDataAdmin)
router.post('/login/', AdminController.loginAdmin)
router.post('/auth/refresh', middlewareController.requestRefreshToken)
router.post('/logout', middlewareController.verifyToken, adminController.logoutAdmin)
module.exports = router