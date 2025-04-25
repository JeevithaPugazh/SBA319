import HabitLog from "../../models/habit-logs/habitLogs-model.js";
import Habit from "../../models/habits/habits-model.js";

async function seedHabitsLog(req, res) {
  try {
    const habits = await Habit.find();
    for (const habit of habits) {
      await HabitLog.deleteMany({ habitId: habit._id });
      await HabitLog.create(
        {
          habitId: habit._id,
          date: new Date("2025-04-01"),
          status: "completed",
        },
        {
          habitId: habit._id,
          date: new Date("2025-04-02"),
          status: "missed",
        }
      );
    }

    res.status(201).redirect("/habitsLog");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getHabitsLog(req, res) {
  try {
    console.log("Fetching habit logs...");
    const habitsLog = await HabitLog.find({});

    res.status(200).json(habitsLog);
  } catch (error) {
    console.error("Error retrieving habit logs:", error);
    res.status(400).json({
      message: "Error retrieving habit logs",
      error,
    });
  }
}

export { seedHabitsLog, getHabitsLog };
