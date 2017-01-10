import { Schema } from "mongoose";

export var UserSchema: Schema = new Schema ({

    createdAt: Date,
    email: String,
    firstName: String,
    lastName: String

});
