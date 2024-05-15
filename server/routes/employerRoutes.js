import express from "express";
import {
  createEmployer,
  getEmployerById,
  getEmployers,
} from "../controller/employerController.js";

const router = express.Router();

router.get("/", getEmployers);
router.post("/create", createEmployer);
router.get("/get/:id", getEmployerById);

export default router;
