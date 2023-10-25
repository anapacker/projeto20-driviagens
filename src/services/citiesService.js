import { conflictError } from "../errors/conflict.js"
import { citiesRepository } from "../repositories/citiesRepository.js"

async function createCitie(name){
  const existsCitie = await citiesRepository.getCitieByName(name)
  if(existsCitie.length > 0) throw conflictError("Esse nome de cidade já existe.")
  return citiesRepository.insert(name)
}

export const citiesService ={
  createCitie
}