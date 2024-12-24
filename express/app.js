// const express = require('express');
import express from 'express';
import cors from 'cors';
import { dbConnection } from "./database/dbConnection.js";
import employeeRouter from './router/employeeRouter.js';
// import crypto from 'crypto';
import { config } from 'dotenv';

const app = express();

config({path: "./config/config.env"})

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

// Methods in Backend
// get
// put
// delete
// post 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/employee",employeeRouter);

dbConnection();

app.listen(4000, () => {
    console.log("Server is listening at Port 4000");
})