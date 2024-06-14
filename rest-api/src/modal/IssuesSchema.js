import mongoose from "mongoose";

const IssuesSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Issues", IssuesSchema);
