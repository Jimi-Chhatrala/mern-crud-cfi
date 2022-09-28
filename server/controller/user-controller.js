import User from "../schema/user-schema.js";

export const addUser = async (request, response) => {
  // console.log("Hello");

  const user = request.body;

  const newUser = new User(user);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
    console.log(error);
  }
  // console.log(user);
};

export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
