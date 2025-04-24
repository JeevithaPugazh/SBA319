import express from "express";
import * as usersController from "../../controllers/users/users-controller.js";
const router = express.Router();

//All users routes (INDUCES) and their corresponding controller functions (CRUD)

///// seed ////
router.get("/seed", usersController.seedUsers);

//// INDUCES ////

//Index
router.get("/", usersController.getUsers);

//New

//Delete


//Update

//Create
router.post("/", usersController.createUser)

//Edit

//Show

export default router;
