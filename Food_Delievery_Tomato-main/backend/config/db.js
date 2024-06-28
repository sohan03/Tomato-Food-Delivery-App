import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sohankaran35:gVTkFmN7CKsaRD5v@cluster0.ef8qzt8.mongodb.net/Tomato').then(()=>console.log("DB Connected"));
}