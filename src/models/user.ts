import mongoose, { model, Model, Schema } from 'mongoose';
import userInterface from '../interfaces/models/user';

const userSchema = new Schema<userInterface>({
    firstName: { type: String },
    lastName: { type: String },
    userEmail: { type: String },
    userPassword: { type: String },
    userPhone: { type: String },
    userCountryCode: { type: String , default : "+91" },
    userProfilePicture: { type: String },
    gender: { type: String },

}, { timestamps: true })


const Userschema: Model<userInterface> = model('User', userSchema)
export default Userschema;