import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
      .connect(
        process.env.MONGO_URI,
        {
          dbName: "Backend_Tutorial",
        }
      )
      .then(() => {
        console.log("Successfuly Connected to Database.");
      })
      .catch((err) => {
        console.log(`Some error occured while connecting database: ${err}`);
      });
};

// mongodb+srv://codewithsakshichauhan811:<db_password>@cluster0.9mr0v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

