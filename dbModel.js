import mongoose from "mongoose"

const tiktokSchema = mongoose.Schema({
  channel: String,
  ticker: Boolean,
  channel_name: String,
  channel_image: String,
  status: String,
  music: String,
  music_url: String,
  url_Video: String,
  heart: String,
  comment: String,
  mark: String,
  share: String
})

export default mongoose.model('tiktokVideos', tiktokSchema)
