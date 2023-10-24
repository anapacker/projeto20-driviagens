import { db } from "../database.js";

async function insert(firstName, lastName){
  return db.query(`
    INSERT INTO passengers ("firstName", "lastName")
    VALUES ($1, $2)    
  `,[firstName, lastName])
}

export const passengerRepository = {
  insert
}