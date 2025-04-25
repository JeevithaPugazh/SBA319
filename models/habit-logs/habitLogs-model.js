import mongoose from "mongoose";

const habitLogSchema = new mongoose.Schema(
  {
    habitId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Habit",
      required: true,
      index: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["completed", "missed", "skipped"],
      required: true,
    },
  },
  { timestamp: true }
);

const HabitLog = mongoose.model("HabitLog", habitLogSchema);

export default HabitLog;
