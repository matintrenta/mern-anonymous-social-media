import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/socialmedia', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection // VA SIN "NEW"

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', ()=>{
    console.log('database connected:', db.name)
})
