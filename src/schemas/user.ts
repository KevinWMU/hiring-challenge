import { Schema } from "mongoose";

export var userSchema: Schema = new Schema ({

    createdAt: Date,
    email: String,
    firstName: String,
    lastName: String,
    username: String,
    password: String

});

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return password.localCompare(this.local.password);
};
