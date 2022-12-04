import mongoose from "mongoose"


export const db = async() => {
    try {
      await mongoose.connect('mongodb://localhost:27017/cv');  
      console.log('connect db success');
    } catch (error) {
        console.log('connect db failed');
    }
}