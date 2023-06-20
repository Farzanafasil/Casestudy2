const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Farzanafasil:FarzanaAtlas@cluster0.1goxopr.mongodb.net/employeedb?retryWrites=true&w=majority')
.then(()=>{
    console.log('DB Connection established')
})
.catch(err=>
    console.log('connection failed')
)