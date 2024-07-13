import {Request, Response} from "express";
import fs from "fs";
import path from "path";

export const uploadBook  = async(request: Request, response:Response) => {
    if (!request.file) {
        return response.status(400).send('No file uploaded');
    }
    const {originalname, path: temp_path} = request.file;
    const file_name_without_extension = path.parse(originalname).name;
    const upload_dir = path.join(process.env.UPLOAD_PATH || "uploads", file_name_without_extension);

    try {
        if (!fs.existsSync(upload_dir)) {
            fs.mkdirSync(upload_dir, {recursive:true});
        }
        const final_path = path.join(upload_dir, originalname);
        fs.renameSync(temp_path, final_path);
        response.status(200).send("Book uploaded successfully");
    } catch (error) {
        console.error("Error uploading book:", error);
        response.status(500).send("Error uploading book");
    }
};
