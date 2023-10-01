const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/userController');
const AdminController = require('../Controllers/adminController');
const SubAdminController = require('../Controllers/subAdminController');
const PostController = require('../Controllers/postController');

router.get('/create1',UserController.create1);
router.get('/read2',UserController.read2);
router.get('/delete3',UserController.delete3);
router.get('/update4',UserController.update4);

router.get('/create5',AdminController.create5);
router.get('/read6',AdminController.read6);
router.get('/delete7',AdminController.delete7);
router.get('/update8',AdminController.update8);

router.get('/create9',SubAdminController.create9);
router.get('/read10',SubAdminController.read10);
router.get('/delete11',SubAdminController.delete11);
router.get('/update12',SubAdminController.update12);

router.get('/create13',PostController.create13);
router.get('/read14',PostController.read14);
router.get('/delete15',PostController.delete15);
router.get('/update16',PostController.update16);

module.exports=router;

