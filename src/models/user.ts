import mongoose = require("mongoose");
//import { Document } from "mongoose";
import { IUser } from "../interfaces/user";
import { userSchema } from "../schemas/user";

interface IUserModel extends IUser, mongoose.Document {
  //custom methods for your model would be defined here
  
}

//var User: mongoose.Model<IUserModel> = mongoose.model<IUserModel>('User', userSchema);

export default mongoose.model<IUserModel>('User', userSchema);