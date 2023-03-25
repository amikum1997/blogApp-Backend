import express from 'express';
import UserController from '../../controllers/userController';

const userRouter = express.Router()

userRouter.route('/userLogin').post(UserController.userLogin)
userRouter.route('/userRegistration').post(UserController.userRegistration)
userRouter.route('/forgotPassword').post(UserController.forgotPassword)
userRouter.route('/resetPassword').post(UserController.resetPassword)
userRouter.route('/userArticleHistory').post(UserController.userArticleHistory)


export default userRouter;