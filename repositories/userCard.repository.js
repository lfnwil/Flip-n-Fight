import { User } from "../models/index.model.js";

export async function createUser({username, password}) {
    const user = await User.create({ });
    return user;
}

export async function getAllUsers() {
  return await User.findAll();
}

export async function getUserById(id) {
  const user = await User.findByPk(id);
  if (!user) {
    return null;
  }

  return user;
}

export async function updateUser(id, values) {
  const user = await getUserById(id);
  if (!user) {
    return null;
  }

  return await user.update(values);
}

export async function deleteUser(id) {
  const user = await getUserById(id);
  if (!user) {
    return null;
  }

  return await updateHero(user.id, { isDeleted: true });
}