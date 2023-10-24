import { passengerRepository } from "../repositories/passengersRepository.js"

async function createPassenger(firstName, lastName){
  await passengerRepository.insert(firstName,lastName)
}

export const passengersService = {
  createPassenger
}