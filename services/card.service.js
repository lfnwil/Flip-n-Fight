import {ConflictError, BadRequestError,NotFoundError } from "../errors/api.error.js";

import { CardRepository } from "../repositories/index.repository.js";

export async function getCardById(id) {
  const card = await CardRepository.getCardById(id);

  if (!card) {
    throw new NotFoundError("La mission n'existe pas.");
  }

  return {
    id: card.id,
    name: card.name,
    type: card.type,
    rarity: card.rarity,
    color : card.color,
    image : card.image,
  };
}

export async function getAllCards() {
  const card = await CardRepository.getAllCards(); 

  const formattedCard = card.map((card) => {  
    return {
      id: card.id,
      name: card.name,
      type: card.type,
      rarity: card.rarity,
      color : card.color,
      image : card.image,
    };
  });
  
  return formattedCard;
}

export async function createCard(data) {
  try {
    if (!data.name || !data.rarity) {
      throw new BadRequestError("Nom et rareté sont requis.");
    }
    return await CardRepository.createCard(data);
  } catch (error) {
    throw new Error("Erreur lors de la création de la carte.");
  }
}

export async function updateCard(id, updates) {
  try {
    const updatedCard = await CardRepository.updateCard(id, updates);
    if (!updatedCard) {
      throw new Error("Carte non trouvée.");
    }
    return updatedCard;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour de la carte.");
  }
}

export async function deleteCard(id) {
  try {
    const deletedCard = await CardRepository.deleteCard(id);
    if (!deletedCard) {
      throw new Error("Carte non trouvée.");
    }
    return deletedCard;
  } catch (error) {
    throw new Error("Erreur lors de la suppression de la carte.");
  }
}

export async function getRandomCards(count) {
  try {
    if (isNaN(count) || count <= 0) {
      throw new Error("Le nombre de cartes doit être un nombre positif.");
    }
    return await CardRepository.getRandomCards(count);
  } catch (error) {
    throw new Error("Erreur lors de la récupération des cartes aléatoires.");
  }
}

export async function getCardsByRarity(rarity) {
  try {
    if (!rarity) {
      throw new Error("La rareté est requise.");
    }
    return await CardRepository.getCardsByRarity(rarity);
  } catch (error) {
    throw new Error("Erreur lors de la récupération des cartes par rareté.");
  }
}
