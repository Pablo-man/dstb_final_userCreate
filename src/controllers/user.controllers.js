import User from "../model/User.js";

export const createUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({"message": "User created"})
  } catch (error) {
    res.json({"message": error.message})
  }
};
