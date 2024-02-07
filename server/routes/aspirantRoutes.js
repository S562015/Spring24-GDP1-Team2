import express from "express";
import {
  createAspirants,
  getAspirants,
} from "../controller/aspirantController.js";

const router = express.Router();

router.get("/", getAspirants);
router.post("/create", createAspirants);

export default router;
