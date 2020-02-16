const database=require('../database.js')

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
  SELECT users_id AS "user_id", donations.oid AS "donation_id", pickup_time, feeds_quantity, fits_car, additional_info, processing
  FROM donations
  WHERE users_id=?`
  database.get(getOneUserDonationsQuery, id, callback)
}
function getFoodTypeOid(type,callback){
  let getFoodTypeOidQuery=`
  SELECT food_types.oid 
  FROM food_types
  WHERE food_type=?`
  database.get(getFoodTypeOidQuery, type, callback)
}
function getFoodTypes(id,callback){
  let getFoodTypesQuery=`
  SELECT food_type 
  FROM food_types
  JOIN donations_foodTypes ON food_types_id=food_types.oid
  WHERE donations_id=?`
  database.all(getFoodTypesQuery, id, callback)
}


module.exports={
  createDonation,
  createFoodTypeRelation,
  getFoodTypeOid,
  getOneUserDonations,
  getFoodTypes
}