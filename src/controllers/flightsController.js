import httpStatus from "http-status"
import { fligthsService } from "../services/fligthsService.js"

async function postFligths(req, res) {
  const {origin, destination, date} = req.body

  await fligthsService.createFligths(origin, destination, date)
  res.sendStatus(httpStatus.CREATED)
}

export const fligthsController = {
  postFligths
}