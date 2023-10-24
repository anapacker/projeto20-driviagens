import httpStatus from "http-status"
import { passengersService } from "../services/passengersService.js"

async function postPassenger(req, res){
  const {firstName, lastName} = req.body

  await passengersService.createPassenger(firstName, lastName)
  res.sendStatus(httpStatus.CREATED)

}

async function getPassengerAndTravels(req,res){
  const {name} = req.query

  const travelsPassenger = await passengersService(name)
  res.send(travelsPassenger)
}

export const passengersController = {
  postPassenger,
  getPassengerAndTravels
}