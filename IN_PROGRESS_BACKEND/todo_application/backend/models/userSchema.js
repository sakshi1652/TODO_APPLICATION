import mongoose from "mongoose";
                                            
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3,"Name must contain at least 3 characters."],
        maxLength: [32,"Name cannot exceed 32 characters."],
    },
    email: String,
    phone: Number,
    password: {
        type: String,
        minLength: [8, "Password must have at least 8 characters!"],
    },          
})                   
                                                       
export const User = mongoose.model("User", userSchema);