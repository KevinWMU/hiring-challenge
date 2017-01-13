import mongoose = require("mongoose");
import { Document } from "mongoose";
import { IUser } from "../interfaces/user";
import { userSchema } from "../schemas/user";

export interface IUserModel extends IUser, Document {
  //custom methods for your model would be defined here
}