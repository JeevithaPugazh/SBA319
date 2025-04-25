import express from "express";
import * as habitsController from "../../controllers/habits/habits-controller.js";
const router = express.Router();

router.get("/seed", habitsController.seedHabits);

router.get("/", habitsController.getHabits);

export default router;
