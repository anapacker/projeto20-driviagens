import { passengersController } from "../controllers/passengersController.js";

import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { passengerSchema } from "../schemas/passengersSchema.js";

const passengersRouter = Router()

passengersRouter.post("/passengers", validateSchema(passengerSchema), passengersController.postPassenger)
passengersRouter.get("/passengers/travels", passengersController.getPassengerAndTravels)

export default passengersRouter
