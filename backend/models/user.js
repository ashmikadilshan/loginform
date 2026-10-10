import mongoose from "mongoose";

const userschema = new mongoose.shema(

{
     name: {
      type: string,
      required : true,
      trim : true
    },

    email : {
        type : string,
        required : true,
        unique : true,
        trim : true,
        lowercase : true
    },

    password : {
        type : String,
        required : true
    }

},

{
    timestamps : true ,
}

);

const user = mongoose.model("user",userschema);

export default user;