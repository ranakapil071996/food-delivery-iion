import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: '1d',
  });
};

export const registerUser = async (username: string, password: string) => {
  const userExists = await User.findOne({ username });
  if (userExists) throw new Error('User already exists');

  const user = await User.create({ username, password });
  return { token: generateToken(user.id), user: { username: user.username } };
};

export const loginUser = async (username: string, password: string) => {
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  return { token: generateToken(user.id), user: { username: user.username } };
};