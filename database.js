const sqilte3 = require('sqlite3')
const database = new sqilte3.Database('./database.db')
//---Queries---
let createUsersTableQuery='CREATE TABLE IF NOT EXISTS users (email TEXT UNIQUE, password TEXT, name TEXT, company_name TEXT, street_address TEXT, city TEXT, state TEXT, zip_code TEXT, phone_number TEXT, type TEXT)'

let createDonationsTableQuery='CREATE TABLE IF NOT EXISTS donations (users_id INTEGER, pickup_time TEXT, feeds_quantity INTEGER, fits_car INTEGER, additional_info TEXT, processing TEXT DEFAULT available)'

let createFoodTypesTableQuery='CREATE TABLE IF NOT EXISTS food_types (food_type TEXT)'

let createDonationsFoodTypesTableQuery='CREATE TABLE IF NOT EXISTS donations_foodTypes (donations_id INTEGER, food_types_id INTEGER)'
//---Create---
database.run(createUsersTableQuery, error => {
  if (error) console.error(new Error("Create users table failed."), error);
  else console.log("Create users table succeeded");
})
database.run(createDonationsTableQuery, error =>{
  if (error) console.error(new Error("Create donations table failed."), error);
  else console.log("Create donations table succeeded");
})
database.run(createFoodTypesTableQuery, error => {
  if (error) console.error(new Error("Create food_types table failed."), error);
  else console.log("Create food_types table succeeded");
})
database.run(createDonationsFoodTypesTableQuery, error => {
  if (error) console.error(new Error("Create donations_foodtTypes table failed."), error);
  else console.log("Create donations_foodtTypes table succeeded");
})

module.exports=database