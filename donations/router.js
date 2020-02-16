const model = require('./model')

function createDonation(request,response){
  let userId = request.params.id
  let newDonation = [userID, request.body.pickup_time, request.body.feeds_quantity, request.body.fits_car, request.body.additional_info, request.body.processing]
  return response.status(200).json({
    status:200, 
    message:"Success"
  })
}
module.exports={
  createDonation,
}