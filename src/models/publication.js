import { Schema, model } from 'mongoose'

const publicationSchema = new Schema({

    title: String,
    
    body: String,
    
    gender: Boolean,
    
    age: Number,
    
    likes: {
        type: Number,
        default: 0
    },
    
    _created: {
        type: Date,
        default: Date.now
    }
},
{ versionKey: false })

export default model('Publication', publicationSchema)