import mongoose from "mongoose";

var colors = require("colors/safe");

const connectDB = (url: string | undefined) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url!)
    .then(() => console.log(colors.cyan("MongoDB connected")))
    .catch((err) => console.log(err));
};

export default connectDB;
