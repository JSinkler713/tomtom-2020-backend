const fs = require('fs')
const sqlite3 = require('sqlite3')
const database = new sqlite3.Database('./database.db')

const sqlBuffer = fs.readFileSync('./seed.sql')

const sqlString = sqlBuffer.toString()

database.exec(sqlString, error => {
  if (error) console.error("SQL seed failed", error)
  else console.log("SQL seed Success!")
})