import User from "../model/User.js";

export const renderUsers = async (req, res) => {
  try {
    const users = await User.find().lean();
    res.json({"message": users})
  } catch (error) {
    console.log({ error });
    res.json({"message": error.message})
  }
};

export const createUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({"message": "User created"})
  } catch (error) {
    res.json({"message": error.message})
  }
};

export const editUser = async (req, res) => {
    try{
        const {id} = await req.params
        await User.updateOne({_id: id}, req.body)
        return res.json({message: "User Updated"})
    }catch(error){
        return res.json({message: error.message})
    }
};

export const deleteUser = async (req, res) => {
    try{
        const {id} = await req.params
        await User.deleteOne({_id:id})
        return res.json({message: "User Deleted"})
    }catch(error){
        return res.json({message: error.message})
    }

};