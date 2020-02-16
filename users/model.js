const database=require('../database.js')

function getOneEmail(email,callback){
  let getOneEmailQuery=`
  SELECT email from users
  WHERE email=?`
  database.get(getOneEmailQuery, email, callback)
}

function createUser(info,callback){
  let createUserQuery=`
  INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?)`
  database.run(createUserQuery, info, callback)
}

function getEmailAndPassword(info,callback){
  let getOneEmailAndPasswordQuery = `
  SELECT users.oid AS 'id', email, name, company_name, street_address, city, state, zip_code, phone_number, type from users
  WHERE email=? AND password=?`
  database.get(getOneEmailAndPasswordQuery, info, callback)
}

module.exports={
  getOneEmail, createUser, getEmailAndPassword
}