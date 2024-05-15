import express from "express";
import {
  createApplication,
  getApplicationById,
  getApplications,
  updateApplicationStatus,
} from "../controller/applicationController.js";

const router = express.Router();

router.get("/", getApplications);
router.post("/create", createApplication);
router.get("/applications/:id", getApplicationById);
router.post("/:id/update-status", updateApplicationStatus);

export default router;
