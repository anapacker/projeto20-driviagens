import httpStatus from "http-status"
import { fligthsService } from "../services/fligthsService.js"

async function postFligths(req, res) {
  const {origin, destination, date} = req.body

  await fligthsService.createFligths(origin, destination, date)
  res.sendStatus(httpStatus.CREATED)
}

async function getFlights(req, res){
  const {origin, destination} = req.query
  const smalletDate = req.query["smaller-date"]
  const biggerDate = req.query["bigger-date"]

  const flights = await fligthsService.getAllFlights(origin, destination, smalletDate, biggerDate)

  res.send(flights)
}

export const fligthsController = {
  postFligths,
  getFlights
}