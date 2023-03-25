import { INext, IRequest, IResponse } from '../interfaces/vendors';
import BaseError from '../error/baseError';

const AdminController = {
    articleViews: async (req: IRequest, res: IResponse, next: INext) => {
        try {

        } catch (err) {
            next(err)
        }
    },
    articlesViewByCountry: async (req: IRequest, res: IResponse, next: INext) => {
        try {

        } catch (err) {
            next(err)
        }
    },
    categoryBaseArticleReach: async (req: IRequest, res: IResponse, next: INext) => {
        try {

        } catch (err) {
            next(err)
        }
    },
}

export default AdminController;