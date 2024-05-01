import express from "express";
import {
  createEmployer,
  getEmployers,
} from "../controller/employerController.js";

const router = express.Router();

router.get("/", getEmployers);
router.post("/create", createEmployer);
router.post("/employer/:id", createEmployer);

export default router;
