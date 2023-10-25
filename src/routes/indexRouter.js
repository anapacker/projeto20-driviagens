import { Router } from "express";
import passengersRouter from "./passengersRouter.js";
import citiesRouter from "./citiesRouter.js";
import flightsRouter from "./flightsRouter.js";

const routes = Router()
routes.use(passengersRouter)
routes.use(citiesRouter)
routes.use(flightsRouter)

export default routes