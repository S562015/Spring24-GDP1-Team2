import express from "express";
import {
  createAspirants,
  getAspirantById,
  getAspirants,
  getAspirantsByIds,
  uploadFile,
} from "../controller/aspirantController.js";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
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

export default router;
