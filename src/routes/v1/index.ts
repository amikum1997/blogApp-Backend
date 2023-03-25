import express from 'express';
import adminRouter from './adminRoutes';
import userRouter from './userRoutes';
import articleRouter from './articleRoutes';

const router = express.Router()

router.get('/status', (req, res) => res.send({status : 'ok'}));
router.use('/admin', adminRouter)
router.use('/user', userRouter)
router.use('/articles', articleRouter)



export default router;