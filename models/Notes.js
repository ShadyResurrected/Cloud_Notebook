const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        defalut : "General"
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('notes',NotesSchema)