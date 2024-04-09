import express from "express";
import {
  getJobDetails,
  createJobPost,
  getJobId,
} from "../controller/jobController.js";

const router = express.Router();

router.get("/", getJobDetails);
router.post("/create", createJobPost);
router.get("/job/:id", getJobId);

export default router;
