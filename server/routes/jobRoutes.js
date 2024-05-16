import express from "express";
import {
  getJobDetails,
  createJobPost,
  getJobId,
  getJobByIds,
} from "../controller/jobController.js";

const router = express.Router();

router.get("/", getJobDetails);
router.post("/create", createJobPost);
router.get("/job/:id", getJobId);
router.get("/get/", getJobByIds);

export default router;
