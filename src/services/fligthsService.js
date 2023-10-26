import dayjs from "dayjs"
import { conflictError } from "../errors/conflict.js"
import { notFoundError } from "../errors/notFound.js"
import { invalidDateError } from "../errors/invalidDate.js"
import { flightsRepository } from "../repositories/fligthsRepository.js"
import customParseFormat from "dayjs/plugin/customParseFormat.js"
dayjs.extend(customParseFormat)


async function createFligths(origin, destination, date) {
  const currentDate = dayjs()
  const flightsDate = dayjs(date, "DD-MM-YYYY")
  if (flightsDate < currentDate) throw invalidDateError()

  const originCity = await flightsRepository.getCitieOrigin(origin)
  if (originCity.rowCount === 0) throw notFoundError("Cidade de origem não encontrada.")

  const destinationCity = await flightsRepository.getCitieDestination(destination)
  if (destinationCity.rowCount === 0) throw notFoundError("cidade de deestino não encontrada.")

  if (origin === destination) throw conflictError("Cidade de origem e cidade de destino não podem ser iguais.")


  await flightsRepository.insert(origin, destination, flightsDate)
}

async function getAllFlights(origin, destination) {
  let result = await flightsRepository.getAll(origin, destination)
  result = result.map((fly) => {
    fly.date = dayjs(fly.date).format("DD-MM-YYYY")
    return fly
  })
  return result
}


export const fligthsService = {
  createFligths,
  getAllFlights
}