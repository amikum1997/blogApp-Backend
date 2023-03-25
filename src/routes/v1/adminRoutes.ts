import express from 'express';
import AdminController from '../../controllers/adminController';

const adminRouter = express.Router()

adminRouter.route('/articleViews').get(AdminController.articleViews)
adminRouter.route('/articlesViewByCountry').get(AdminController.articlesViewByCountry)
adminRouter.route('/categoryBaseArticleReach').get(AdminController.categoryBaseArticleReach)

export default adminRouter;