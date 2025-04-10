import { UserRepository } from "../repositories/index.js";

export async function getAllUsers() {
  try {
    return await UserRepository.getAllUsers();
  } catch (error) {
    throw new Error("Erreur lors de la récupération des utilisateurs.");
  }
}

export async function getUserById(id) {
  try {
    const user = await UserRepository.getUserById(id);
    if (!user) {
      throw new Error("Utilisateur non trouvé.");
    }
    return user;
  } catch (error) {
    throw new Error("Erreur lors de la récupération de l'utilisateur.");
  }
}

export async function createUser(data) {
  try {
    return await UserRepository.createUser(data);
  } catch (error) {
    throw new Error("Erreur lors de la création de l'utilisateur.");
  }
}

export async function updateUser(id, updates) {
  try {
    const updatedUser = await UserRepository.updateUser(id, updates);
    if (!updatedUser) {
      throw new Error("Utilisateur non trouvé.");
    }
    return updatedUser;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour de l'utilisateur.");
  }
}

export async function deleteUser(id) {
  try {
    const deletedUser = await UserRepository.deleteUser(id);
    if (!deletedUser) {
      throw new Error("Utilisateur non trouvé.");
    }
    return deletedUser;
  } catch (error) {
    throw new Error("Erreur lors de la suppression de l'utilisateur.");
  }
}

export async function updateUserCoins(userId, amount) {
  try {
    const updatedUser = await UserRepository.updateUserCoins(userId, amount);
    if (!updatedUser) {
      throw new Error("Utilisateur non trouvé.");
    }
    return updatedUser;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour des coins de l'utilisateur.");
  }
}

export async function getUserCollection(userId) {
  try {
    const collection = await UserRepository.getUserCollection(userId);
    return collection;
  } catch (error) {
    throw new Error("Erreur lors de la récupération de la collection de l'utilisateur.");
  }
}
