import express from 'express';
import ArticleController from '../../controllers/articleController';

const articleRouter = express.Router()

articleRouter.route('/createArticle').post(ArticleController.createArticle)
articleRouter.route('/deleteArticle').delete(ArticleController.deleteArticle)
articleRouter.route('/editArticle').put(ArticleController.editArticle)
articleRouter.route('/getArticleByCategory').get(ArticleController.getArticleByCategory)
articleRouter.route('/getArticleBySlug').get(ArticleController.getArticleBySlug)
articleRouter.route('/getArticleByTag').get(ArticleController.getArticleByTag)
articleRouter.route('/getPopularArticle').get(ArticleController.getPopularArticle)
articleRouter.route('/getRecentArticle').get(ArticleController.getRecentArticle)


export default articleRouter;