import express from "express"
import cookieParser from "cookie-parser"
import UserRouter from "../api/routes/user.js"
import { Home } from "./controllers/user.js"
import MongoDB from "../api/database/database.js"
import dotenv from "dotenv"
dotenv.config({
    path: "./config.env"
})
MongoDB()
export const app = express()
app.use(cookieParser());
app.use(express.json());
app.use(UserRouter)


