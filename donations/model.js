const database=('../database.js')

function createDonation(info, callback){
  let createDonationQuery=`
  INSERT INTO donations VALUES (?,?,?,?,?,?)`
  database.run(createDonationQuery, info, callback)
}
function createFoodTypeRelation(info, callback) {
  let createFoodTypeRelationQuery = `
  INSERT INTO donations_foodTypes (?,?)`
  database.run(createFoodTypeRelationQuery, info, callback)
}
function getOneUserDonations(id,callback){
  let getOneUserDonationsQuery=`
  SELECT users_id AS "user_id", rowid AS "donation_id", pickup_time, feeds_quantity, fits_car, additional_info, processing
  FROM users
  WHERE users_id=?`
  database.get(getOneUserDonationsQuery,id,callback)
}
function getfoodTypeOid(type,callback){
  let getfoodTypeOidQuery=`
  SELECT food_types.oid from food_types
  WHERE food_type=?`
  database.get(getfoodTypeOidQuery, type, callback)
}


module.exports={
  createDonation,
  createFoodTypeRelation,
  getfoodTypeOid,
  getOneUserDonations
}