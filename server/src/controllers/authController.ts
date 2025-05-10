import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authServices";

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const result = await registerUser(username, password);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const result = await loginUser(username, password);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
