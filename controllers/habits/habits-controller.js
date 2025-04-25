import Habit from "../../models/habits/habits-model.js";
import User from "../../models/users/users-model.js";

async function seedHabits(req, res) {
  try {
    const users = await User.find();
    for(const user of users){
        await Habit.deleteMany({ userId: user._id });
        await Habit.insertMany([
            {
                userId: user._id,
                title: "Morning Jog",
                description: "Jog for 30 minutes every morning.",
                frequency: "daily",
                startDate: new Date("2025-04-01"),
                endDate: new Date("2025-04-30"),
              },
              {
                userId: user._id,
                title: "Read a Book",
                description: "Read 20 pages of a book daily.",
                frequency: "daily",
                startDate: new Date("2025-04-01"),
                endDate: new Date("2025-04-30"),
              },
              {
                userId: user._id,
                title: "Meditation",
                description: "Meditate for 15 minutes.",
                frequency: "daily",
                startDate: new Date("2025-04-01"),
                endDate: new Date("2025-04-30"),
              },
            ]);
    }
    res.status(201).redirect("/habits");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getHabits(req, res) {
  try {
    const habits = await Habit.find()
    res.status(200).json(habits);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export { seedHabits, getHabits };
