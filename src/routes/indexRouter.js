import { Router } from "express";
import passengersRouter from "./passengersRouter.js";
import citiesRouter from "./citiesRouter.js";

const routes = Router()
routes.use(passengersRouter)
routes.use(citiesRouter)

export default routes