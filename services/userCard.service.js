import { UserCardRepository } from "../repositories/index.js";

export async function getUserCards(userId) {
  try {
    return await UserCardRepository.getUserCards(userId);
  } catch (error) {
    throw new Error("Erreur lors de la récupération des cartes de l'utilisateur.");
  }
}

export async function addUserCard(userId, cardId, quantity) {
  try {
    return await UserCardRepository.addUserCard(userId, cardId, quantity);
  } catch (error) {
    throw new Error("Erreur lors de l'ajout de la carte à l'utilisateur.");
  }
}
