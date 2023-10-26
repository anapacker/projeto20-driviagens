import { notFoundError } from "../errors/notFound.js"
import { travelRepository } from "../repositories/travelRepository.js"

async function createTravel(passengerId, flightId){
  const passenger = await travelRepository.getPassengerId(passengerId)
  if(passenger.rowCount === 0) throw notFoundError("Passageiro não encontrado.")

  const flight = await travelRepository.getFlightsId(flightId)
  if(flight.rowCount === 0) throw notFoundError("Voo não encontrado.")

  return travelRepository.insert(passengerId, flightId)
}

export const travelService ={
  createTravel
}