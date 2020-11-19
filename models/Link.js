import mongoose from 'mongoose'

const linksSchema = new mongoose.Schema({
  title: {type: String, required:true},
  description: String,
  url: {type: String, required:true},
  click: Number,
})

export default mongoose.model('Link', linksSchema)