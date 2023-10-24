import { db } from "../database.js";

async function insert(firstName, lastName){
  return db.query(`
    INSERT INTO passengers ("firstName", "lastName")
    VALUES ($1, $2)    
  `,[firstName, lastName])
}

async function getPassengerAndQtdTravels(){
  return db.query(`
    SELECT 
      CONCAT("firstName", ' ', "lastName") AS "passenger",
      COUNT(travels."passengerId") AS travels
    FROM 
      passengers
    LEFT JOIN 
      travels ON passengers.id = travels."passengerId"
    GROUP BY 
      passenger
    ORDER BY 
      travels DESC
  `)
}
async function getPassengerAndTravelsByPassengerName(name){
  return db.query(`
    SELECT 
      CONCAT("firstName", ' ', "lastName") AS "passenger",
      COUNT(travels."passengerId") AS travels
    FROM 
      passengers
    LEFT JOIN 
      travels ON passengers.id = travels."passengerId"
    WHERE 
      passengers."firstName" ILIKE '%' || $1 || '%' 
      OR passengers."lastName" ILIKE '%' || $1 || '%'
    GROUP BY 
      passenger
    ORDER BY 
      travels DESC
    `, [name]
  )
}

export const passengerRepository = {
  insert,
  getPassengerAndQtdTravels,
  getPassengerAndTravelsByPassengerName
}