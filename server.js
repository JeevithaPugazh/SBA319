import { config } from "dotenv";
config();
import "./config/database.js";
import express from "express";
import methodOverride from 'method-override';
import usersRouter from "./routes/users/users-router.js";
import habitRouter from "./routes/habits/habits-router.js";
import habitLogRouter from "./routes/habit-logs/habitLogs-router.js";

const app = express();
//conditionally assigning a value to port
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true })); //to get req.body whenever data submitted from forms
app.use(express.json()); //to get req.body whenever json data submitted directly without form like postman
app.use("/users", usersRouter);
app.use("/habits", habitRouter);
app.use("/habitsLog", habitLogRouter);
app.use(methodOverride('_method'));

app.get("/", (req, res) => {
  res.send("Welcome to the Habit-tracker API");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listeneing on PORT:${PORT}`);
});
