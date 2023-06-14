import express from "express"
import { createTaks ,findTaks , taksDelete , taksUpdate}  from "../controllers/taks.js"
import { isAuth}  from "../middlewares/auth.js"
const taksRoute = express.Router()

taksRoute.post("/taks" , isAuth ,createTaks)
taksRoute.get("/Alltaks" , isAuth ,findTaks)
taksRoute.route("/:id").put(isAuth , taksUpdate).delete(isAuth , taksDelete)

export default taksRoute;