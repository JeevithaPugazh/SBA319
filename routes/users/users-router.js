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
router.get("/new", usersController.renderNewForm);

//Delete
router.delete("/:id", usersController.deleteUserById);

//Update

//Create
router.post("/", usersController.createUser);

//Edit
router.get("/:id/edit", usersController.renderEditForm);
//Show
router.get("/:id", usersController.showUser);
export default router;
