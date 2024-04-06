import express from "express";
import {
  getApplication,
  createApplication,
  getApplicationById,
} from "../controller/applicationController.js";

const router = express.Router();

router.get("/", getApplication);
router.post("/create", createApplication);
router.get("/applications/:id", getApplicationById);

export default router;
