import fileModel from '../moels/fileModel.js'
import dotenv from 'dotenv'
dotenv.config();

export const uploadFile = async (req, res) => {
    try {
        let fileObj = {
            name: req.file.originalname,
            path: req.file.path
        }
        
        const file = await fileModel.create(fileObj)
        const path = `http://localhost:${process.env.PORT}/files/${file._id}`
        return res.status(200).send({ status: true, message: "Success", path })

    }
    catch (e) {
        console.error(e.message);
        return res.status(500).send({ status: false, error: e.message })
    }
}


export const getFile=async(req,res)=>{
    try{
        let file=await fileModel.findById(req.params.fileId)
        file.downloadCount++
        await file.save()
        res.download(file.path, file.name);
        
    }
    catch (e) {
        console.error(e.message);
        return res.status(500).send({ status: false, error: e.message })
    }
}