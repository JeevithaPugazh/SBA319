//seperation of concerns

import User from "../../models/users/users-model.js";

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

async function renderNewForm(req,res){
    try{
        res.render('./users/new.ejs');
    }catch(error){
        res.status(400).json({error: error.message});
    }
}




export { seedUsers, getUsers, createUser, renderNewForm };
