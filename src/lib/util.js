// "use server";
import * as mongoose from "mongoose";

const connection = {};

export const connectDB = async () => {
  try {
    console.log("first  called");
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(
      "mongodb+srv://ittepaq:123420@testing.uj2ftni.mongodb.net/next"
    );
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
  }
};
