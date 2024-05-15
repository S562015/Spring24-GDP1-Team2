import express from "express";
import {
  createAspirants,
  getAspirantById,
  getAspirants,
  getAspirantsByIds,
} from "../controller/aspirantController.js";

const router = express.Router();

router.get("/", getAspirants);
router.post("/create", createAspirants);
router.get("/get/:id", getAspirantById);
router.get("/get/", getAspirantsByIds);

export default router;
