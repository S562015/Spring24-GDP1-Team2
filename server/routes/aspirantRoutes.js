import express from "express";
import {
  createAspirants,
  getAspirantById,
  getAspirants,
  getAspirantsByIds,
  uploadFile,
  updateAspirant,
  downloadFile,
} from "../controller/aspirantController.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const UPLOADS_DIR = path.join(__dirname, "../files");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getAspirants);
router.post("/create", createAspirants);
router.get("/get/:id", getAspirantById);
router.get("/get/", getAspirantsByIds);
router.post("/upload-files", upload.single("file"), uploadFile);
router.post("/update-profile", updateAspirant);
router.get("/download/:filename", downloadFile);

export default router;
