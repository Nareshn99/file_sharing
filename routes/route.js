import express from 'express';
const router=express.Router();
import {getFile, uploadFile} from '../controllers/fileController.js'
import upload from '../middlewares/fileMid.js';


router.post("/upload",upload.single('file'), uploadFile)
router.get("/files/:fileId",getFile)


router.all("/**",(req,res)=>{
    res.send({status:false,message:"Invalid request"})
})
export default router