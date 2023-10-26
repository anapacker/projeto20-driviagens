import { Router } from "express"
import { validateSchema } from "../middleware/validateSchema.js"
import { travelsSchema } from "../schemas/travelsSchema.js"
import { travelController } from "../controllers/travelController.js"

const travelRouter = Router()

travelRouter.post("/travels", validateSchema(travelsSchema), travelController.postTravel )

export default travelRouter