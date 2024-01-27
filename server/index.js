import express from "express";
import bodyParser from "body-parser";
//import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";

const app = express();
dotenv.config();

// TODO:check what is config means
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

//middleware
const PORT = process.env.PORT || 5000;
// ADD PORT IS LOCAL
app.listen(PORT,()=>console.log(`Server running on port :${PORT}`))
