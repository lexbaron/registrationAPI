const express = require('express')
const { database } = require('./utils/database.util')
const { Registration } = require('./models/registration.model')
const { registersRouters } = require('./routes/registrations.routes')

database.authenticate()
    .then( res => console.log("registrations database authenticated "))
    .catch( err => console.log(err))

database.sync()
    .then(res => console.log("database synced"))
    .catch(err => console.log(err))
    
Registration.sync()
.then(res => console.log("model synced"))
.catch(err => console.log(err))


const app = express();

let myDate = new Date()

console.log(myDate);

app.use(express.json());

app.use('/api/v1/registrations', registersRouters)

app.listen(5000, () =>{
    console.log("server are running!!");
})