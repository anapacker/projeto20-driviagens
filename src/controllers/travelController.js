import httpStatus from "http-status"
import { travelService } from "../services/trravelService.js"

async function postTravel(req, res){
  const { passengerId, flightId} = req.body

  await travelService.createTravel(passengerId, flightId)
  res.sendStatus(httpStatus.CREATED)
}

export const travelController ={
  postTravel
}