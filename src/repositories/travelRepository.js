import { db } from "../database.js";

async function getPassengerId(passengerId){
  return db.query(`
    SELECT * FROM passengers WHERE id=$1
  `, [passengerId])
}

async function getFlightsId(flightId){
  return db.query(`
    SELECT * FROM flights WHERE id=$1 
  `, [flightId])
}

async function insert(passengerId, flightId){
  return db.query(`
    INSERT INTO travels ("passengerId", "flightId")
    VALUES ($1, $2)
  `, [passengerId, flightId])
}

export const travelRepository = {
  getPassengerId,
  getFlightsId,
  insert
}