import { UserService } from "../services/index.service.js";

export async function getAllUsers(req, res, next) {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

export async function getUserById(req, res, next) {
  try {
    const id = req.params.id;
    const user = await UserService.getUserById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

export async function createUser(req, res, next) {
  try {
    const { username, password } = req.body;
    const newUser = await UserService.createUser({ username, password });
    res.json(newUser);
  } catch (error) {
    next(error);
  }
}

export async function updateUser(req, res, next) {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updatedUser = await UserService.updateUser(id, updates);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(req, res, next) {
  try {
    const id = req.params.id;
    const deletedUser = await UserService.deleteUser(id);
    res.json(deletedUser);
  } catch (error) {
    next(error);
  }
}

export async function updateUserCoins(req, res, next) {
  try {
    const { userId, amount } = req.body;
    const updatedUser = await UserService.updateUserCoins(userId, amount);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
}

export async function getUserCollection(req, res, next) {
  try {
    const userId = req.params.userId;
    const collection = await UserService.getUserCollection(userId);
    res.json(collection);
  } catch (error) {
    next(error);
  }
}
