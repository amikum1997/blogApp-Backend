import { Document, ObjectId } from "mongoose";

interface userInterface extends Document {
    firstName: string,
    lastName: string,
    userEmail: string,
    userPassword: string,
    userPhone: string,
    userCountryCode: string,
    userProfilePicture: string,
    gender: string,
    userRole: string,
}

export default userInterface;