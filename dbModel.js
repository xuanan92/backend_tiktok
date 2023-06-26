import mongoose from "mongoose"

const tiktokSchema = mongoose.Schema({
  name: String,
  password: String,
})

export default mongoose.model('tiktokVideos', tiktokSchema)
