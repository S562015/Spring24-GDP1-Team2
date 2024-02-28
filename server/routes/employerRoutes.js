import express from "express";
import {
  createEmployer,
  getEmployers,
} from "../controller/employerController.js";

const router = express.Router();

router.get("/", getEmployers);
router.post("/create", createEmployer);

export default router;
