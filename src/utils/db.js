import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Atlas connected successfully");
  } catch (error) {
    throw new Error("\n\n Connection failed!\n\n");
  }
};

export default connect;
