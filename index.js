import express from "express"
import cookieParser from "cookie-parser"
import UserRouter from "../api/routes/user.js"
import MongoDB from "../api/database/database.js"
import taksRoute from "../api/routes/taks.js"
import dotenv from "dotenv"
import { ErrorMiddlewares } from "./middlewares/error.js"
dotenv.config({
    path: "./config.env"
})
MongoDB()
export const app = express()
app.use(cookieParser());
app.use(express.json());
app.use(UserRouter)
app.use(taksRoute)
app.use(ErrorMiddlewares)


