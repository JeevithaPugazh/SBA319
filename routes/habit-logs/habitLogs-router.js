import express from "express";
import * as habitsLogController from "../../controllers/habit-logs/habitsLogs-controller.js";
const router = express.Router();

router.get("/seed", habitsLogController.seedHabitsLog);

router.get("/", habitsLogController.getHabitsLog);



export default router;