import mongoose from "mongoose";

const fileSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    path:{
        type:String,
        require:true
    },
    downloadCount: {
        type: Number,
        required: true,
        default: 0
    },
},{timestamp:true})


const file=mongoose.model("file",fileSchema)
export default file