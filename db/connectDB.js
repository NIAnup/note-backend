import mongoose from 'mongoose';
import dotenv from 'dotenv';


const connectDB = async ()=>{

    try {
      await  mongoose.connect(process.env.MONGODBURL,{
        useNewUrlParser: true,
      useUnifiedTopology: true,
      }
        
      );
      console.log("Mongoose is Connected");
      
    } catch (error) {
        console.log("Mongoose is error");
    }
}

export default connectDB;