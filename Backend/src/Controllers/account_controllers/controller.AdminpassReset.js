import userModel from "../../Models/userModel.js";
import AsyncHandler from "express-async-handler";
import bcrypt from 'bcrypt'


export const AdminPasswordReset = AsyncHandler(async (req, res) => {
  const { id, password } = req.body;

  if (!id || !password) {
    res.status(400);
    throw new Error("id or password not found in the request.");
  }

  const user = await userModel.findById(id);

  if (!user) {
    res.status(404);
    throw new Error("Account not found");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  await userModel.findByIdAndUpdate(id, {
    password: hashedPass,
  });

  return res.status(200).json({ message: "New password has been set" });
});