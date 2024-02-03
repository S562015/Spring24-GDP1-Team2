import express from "express";
import {
  createOrganization,
  getOrganizations,
} from "../controller/organizationController.js";
const router = express.Router();

router.get("/", getOrganizations);
router.post("/create", createOrganization);

export default router;
