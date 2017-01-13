import { Schema } from "mongoose";

export var userSchema: Schema = new Schema ({

    createdAt: Date,
    email: String,
    firstName: String,
    lastName: String

});
