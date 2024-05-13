import express from "express";
import {
  createApplication,
  getApplicationById,
  getApplications,
} from "../controller/applicationController.js";

const router = express.Router();

router.get("/", getApplications);
router.post("/create", createApplication);
router.get("/applications/:id", getApplicationById);

export default router;
