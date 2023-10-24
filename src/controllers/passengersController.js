import httpStatus from "http-status"
import { passengersService } from "../services/passengersService.js"

async function postPassenger(req, res){
  const {firstName, lastName} = req.body

  await passengersService.createPassenger(firstName, lastName)
  res.sendStatus(httpStatus.CREATED)

}

export const passengersController = {
  postPassenger
}