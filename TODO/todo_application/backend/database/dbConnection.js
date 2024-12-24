import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "TODO_APPLICATION",
    }).then(() => {
        console.log("Connected to Database Sucessfully.");
    }).catch(error => {
        console.log(`Some error occured connecting to Database: ${error}`);
    })
};