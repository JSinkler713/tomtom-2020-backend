const model=require('./model')

//---Register----
function register(request,response){
  let newEmail=request.body.email
  model.getOneEmail([newEmail], (error, foundEmail) => {
    if (error) {
      return response.status(500).json({
        status: 500, message: 'Something went wrong. Please try again.'
      })
    }
    if (foundEmail) {
      let foundError = { status: 400, error: "" }
      if (foundEmail.email === newEmail) {
        foundError.error="Email is already registered."
      }
      return response.status(400).json(foundError)
    }
    let newUser = [request.body.email, request.body.password, request.body.name, request.body.company_name, request.body.street_address, request.body.city, request.body.state, request.body.zip_code, request.body.phone_number, request.body.type]
    model.createUser(newUser,error=>{
      if (error) {
        return response.status(500).json({
          status: 500, message: 'Something went wrong. Please try again.'
        })
      }
      return response.status(200).json({
        status: 200,
        message: 'Successfully Registered!',
      })
    })
  })
}
function login(request,response){

}

module.exports={
  register, 
  login
}