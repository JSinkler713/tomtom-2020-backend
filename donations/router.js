const model = require('./model')

function createDonation(request,response){
  let userId = request.params.id
  let newDonation = [userId, request.body.pickup_time, request.body.feeds_quantity, request.body.fits_car, request.body.additional_info, request.body.processing]
  let foodTypes = request.body.food_types
  model.createDonation(newDonation,error=>{
    if (error){
      return response.status(500).json({
        status: 500, message: 'Something went wrong. Please try again.'
      })
    }
    let donationOid=this.lastID
    for (let type of foodTypes){
      model.getFoodTypeOid([type],(error,typeOid)=>{
        if (error) {
          return response.status(500).json({
            status: 500, message: 'Something went wrong. Please try again.'
          })
        }
        let newTypeRelation=[donationOid,typeOid]
        model.createFoodTypeRelation(newTypeRelation,error=>{
          if (error) {
            return response.status(500).json({
              status: 500, message: 'Something went wrong. Please try again.'
            })
          }
        })
      })
    }
    return response.status(200).json({
      status: 200,
      message: "Success"
    })
  })
}
function getOneUserDonations(request,response){
  let userId=request.params.id
  model.getOneUserDonations([userId],(error,data)=>{
    if (error) {
      return response.status(500).json({
        status: 500, 
        message: 'Something went wrong. Please try again.'
      })
    }
    if (!data){
      return response.status(400).json({
        status: 400, 
        message: 'Donation does not exist'
      })
    }
    let i=0
    let donationData=data
    for (let donation of donationData){
      model.getFoodTypes(donation.donation_id,(error,typeData)=>{
        if (error) {
          return response.status(500).json({
            status: 500,
            message: 'Something went wrong. Please try again.'
          })
        }
        donationData[i].food_types=typeData.map(type=>type.food_type)
        i++
      })
    }
    console.log(donationData)
    return response.status(200).json({
      status: 200,
      message: "Success",
      data: donationData,
    })
  })
}
module.exports={
  createDonation,
  getOneUserDonations
}