import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { citiesSchema } from "../schemas/citiesSchema.js";
import { citiesController } from "../controllers/citiesController.js";

const citiesRouter = Router()

citiesRouter.post("/cities", validateSchema(citiesSchema), citiesController.postCitie)

export default citiesRouter