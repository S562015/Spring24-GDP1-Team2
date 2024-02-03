import express from "express";
import { getAspirants } from "../controller/aspirantController.js";

const router = express.Router();

router.get("/", getAspirants);
// router.post("/create", createOrganization);

export default router;
