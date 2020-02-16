const database=('../database.js')

function createDonation(info, callback){
  let createDonationQuery=`
  INSERT INTO donations VALUES (?,?,?,?,?,?)`
  database.run(createDonationQuery, info, callback)
}

module.exports={
  createDonation,
}