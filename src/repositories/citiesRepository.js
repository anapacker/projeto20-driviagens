import { db } from "../database.js"

async function getCitieByName(name){
  const cities = await db.query(`
      SELECT * FROM cities WHERE name=$1
  `, [name])
  return cities.rows
}

async function insert(name){
  return db.query(`
    INSERT INTO cities (name)
    VALUES ($1)
  `,[name])
}

export const citiesRepository = {
  getCitieByName,
  insert
}