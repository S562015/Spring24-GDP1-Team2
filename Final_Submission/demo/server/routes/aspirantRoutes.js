import express from "express";
import {
  createAspirants,
  getAspirantbyId,
  getAspirants,
} from "../controller/aspirantController.js";

const router = express.Router();

router.get("/", getAspirants);
router.post("/create", createAspirants);
router.get("/applications/:id", getAspirantbyId);

export default router;
