import express from "express";
import multer from "multer";
import {uploadBook} from "../controllers/bookController";

const router = express.Router();
const upload = multer({dest: "temp/"});

router.post("", upload.single("file"), uploadBook);

export default router;