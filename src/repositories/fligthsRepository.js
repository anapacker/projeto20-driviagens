import { db } from "../database.js";

async function getCitieOrigin(origin){
  return db.query(`
    SELECT * FROM cities WHERE id=$1  
  `, [origin])
}

async function getCitieDestination(destination){
  return db.query(`
    SELECT * FROM cities WHERE id=$1
  `, [destination])
}

async function insert(origin,destination, date){
  return db.query(`
    INSERT INTO flights (origin, destination,date)
    VALUES ($1, $2, $3)
  `, [origin, destination, date])
}

export const flightsRepository ={
  getCitieOrigin,
  getCitieDestination,
  insert
}