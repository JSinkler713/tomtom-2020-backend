const express=require('express')
const usersRouter=require('./users/router')
const donationsRouter=require('./donations/router')

const app=express()
const PORT=9000

app.use(express.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  next();
});
//---User Routes---
app.post('/register',usersRouter.register)
app.post('/login', usersRouter.login)
app.get('/users', usersRouter.getUserAddresses)

//---Donations Routes---
app.post('/donations/user/:id',donationsRouter.createDonation)
app.get('/donations/user/:id', donationsRouter.getOneUserDonations)

app.listen(PORT, () => {
  console.log(`App listening on Port:${PORT} \nAccess at http://localhost:${PORT}`)
})