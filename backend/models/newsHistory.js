import mongoose from "mongoose";

const NewsHistorySchema = new mongoose.Schema({
  userIp: { type: String, required: true },
  filters: { type: Object, required: true },
  articles: { type: Array, required: true },
  timestamp: { type: Date, default: Date.now }
});

const NewsHistory = mongoose.model("NewsHistory", NewsHistorySchema);
export default NewsHistory;
