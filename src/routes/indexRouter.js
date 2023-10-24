import { Router } from "express";
import passengersRouter from "./passengersRouter.js";

const routes = Router()
routes.use(passengersRouter)

export default routes