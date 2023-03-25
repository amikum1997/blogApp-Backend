import { INext, IRequest, IResponse } from '../interfaces/vendors';
import BaseError from '../error/baseError';


const UserController = {
    userLogin: async (req: IRequest, res: IResponse, next: INext) => {
        try {

        } catch (err) {
            next(err)
        }
    },
    userRegistration: async (req: IRequest, res: IResponse, next: INext) => {
        try {

        } catch (err) {
            next(err)
        }
    },
    forgotPassword: async (req: IRequest, res: IResponse, next: INext) => {
        try {

        } catch (err) {
            next(err)
        }
    },
    resetPassword: async (req: IRequest, res: IResponse, next: INext) => {
        try {

        } catch (err) {
            next(err)
        }
    },
    userArticleHistory: async (req: IRequest, res: IResponse, next: INext) => {
        try {

        } catch (err) {
            next(err)
        }
    },
}

export default UserController;