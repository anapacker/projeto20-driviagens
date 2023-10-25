import httpStatus from "http-status"
import { citiesService } from "../services/citiesService.js"

async function postCitie(req,res){
  const {name} = req.body

  await citiesService.createCitie(name)
  res.sendStatus(httpStatus.CREATED)
}

export const citiesController = {
  postCitie
}