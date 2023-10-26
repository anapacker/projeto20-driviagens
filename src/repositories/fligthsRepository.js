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

async function getAll(origin, destination){
  let query = `
  SELECT 
    flights.id,
    "originCity".name AS origin,
    "destinationCity".name AS destination,
    flights.date
  FROM 
    flights
  JOIN 
    cities AS "originCity" ON flights.origin = "originCity".id
  JOIN
    cities AS "destinationCity" ON flights.destination = "destinationCity".id 
  WHERE flights.date > now() 

  `
  const queryParams = []

  if(origin){
    query += ` AND "originCity".name ILIKE $1 `
    queryParams.push(origin)
  }
  if(destination){
    query += ` AND "destinationCity".name ILIKE $${queryParams.length + 1} `
    queryParams.push(destination)
  }
  query += ` ORDER BY flights.date;`
  
  const result = await db.query(query, queryParams)
  return result.rows
}

export const flightsRepository ={
  getCitieOrigin,
  getCitieDestination,
  insert,
  getAll
}