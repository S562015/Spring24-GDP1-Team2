import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import organizationRoutes from "./routes/organizationRoutes.js";
import aspirantRoutes from "./routes/aspirantRoutes.js";
import employerRoutes from "./routes/employerRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import AspirantModel from "./model/aspirantModel.js";

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
app.use("/applications", applicationRoutes);

const PORT = process.env.PORT || 5000;
// ADD PORT IS LOCAL
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port :${PORT}`))
  )
  .catch((error) => console.log(error));

// const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const pdfschema = mongoose.model("aspirant");
const upload = multer({ storage: storage });

app.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const fileName = req.file.filename;
  try {
    await pdfschema.create({ pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});
