import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { fligthSchema } from "../schemas/flightsSchemas.js";
import { fligthsController } from "../controllers/flightsController.js";

const flightsRouter = Router()

flightsRouter.post("/flights", validateSchema(fligthSchema),fligthsController.postFligths)
flightsRouter.get("/flights", fligthsController.getFlights)
export default flightsRouter