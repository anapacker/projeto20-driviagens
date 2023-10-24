import { internalServerError } from "../errors/internalServer.js"
import { passengerRepository } from "../repositories/passengersRepository.js"

async function createPassenger(firstName, lastName){
  await passengerRepository.insert(firstName,lastName)
}

async function getTravelsPassenger(name){
  let result

  if(name){
    result = await passengerRepository.getPassengerAndTravelsByPassengerName(name)
    return result.rows
  }
  result = await passengerRepository.getPassengerAndQtdTravels()
  if(result.rowCount <= 10){
    return result.rows
  }
  throw internalServerError("Too many results")
}

export const passengersService = {
  createPassenger,
  getTravelsPassenger
}