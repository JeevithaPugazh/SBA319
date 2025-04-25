//seperation of concerns

import User from "../../models/users/users-model.js";
import mongoose from "mongoose";

async function seedUsers(req, res) {
  try {
    await User.deleteMany();
    await User.create(
      {
        username: "john_doe",
        email: "john@example.com",
        password: "password1",
      },
      {
        username: "jane_smith",
        email: "jane@example.com",
        password: "password2",
      },
      {
        username: "alice_wonder",
        email: "alice@example.com",
        password: "password3",
      }
    );
    res.status(201).redirect("/users");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function createUser(req, res) {
  try {
    const users = await User.create(req.body);
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function renderNewForm(req, res) {
  try {
    res.render("./users/new.ejs");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteUserById(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ error: "Invalid user ID format" });
    }

    const deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) {
      return res
        .status(404)
        .json({ error: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function showUser(req, res) {
  try {
    const { id } = req.params;

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ error: "Invalid user ID format" });
    }

    const user = await User.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function renderEditForm(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ error: "Invalid user ID format" });
    }
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found" });
    }
    res.render("./users/edit.ejs", { user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ error: "Invalid user ID format" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true, // Return the updated document
        runValidators: true, // Ensure the update adheres to the schema
      }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ error: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export {
  seedUsers,
  getUsers,
  createUser,
  renderNewForm,
  deleteUserById,
  showUser,
  renderEditForm,
  updateUser,
};
