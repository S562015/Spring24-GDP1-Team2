import express from "express";
import { getJobDetails, createJobPost } from "../controller/jobController.js";

const router = express.Router();

router.get("/", getJobDetails);
router.post("/create", createJobPost);

export default router;
