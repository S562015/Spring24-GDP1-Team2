import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import organizationRoutes from "./routes/organizationRoutes.js";
import aspirantRoutes from "./routes/aspirantRoutes.js";
import employerRoutes from "./routes/employerRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//middleware
app.use("/organization", organizationRoutes);
app.use("/aspirant", aspirantRoutes);
app.use("/employer", employerRoutes);
app.use("/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
// ADD PORT IS LOCAL
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port :${PORT}`))
  )
  .catch((error) => console.log(error));
