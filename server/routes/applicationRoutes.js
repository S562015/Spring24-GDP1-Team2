import express from "express";
import {
  getApplication,
  createApplication,
} from "../controller/applicationController.js";

const router = express.Router();

router.get("/", getApplication);
router.post("/create", createApplication);

export default router;
