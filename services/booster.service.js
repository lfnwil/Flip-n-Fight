import { UserRepository, CardRepository, UserCardRepository } from "../repositories/index.repository.js";

export async function buyBooster(userId) {
  try {
    const user = await UserRepository.getUserById(userId);
    if (!user || user.coins < 10) {
      throw new Error("Pas assez de pièces pour acheter un booster.");
    }

    user.coins -= 10;
    await user.save();

    const newCards = await openBooster(userId);
    
    return newCards;
  } catch (error) {
    throw new Error("Erreur lors de l'achat du booster : " + error.message);
  }
}

export async function openBooster(userId) {
  try {
    const boosterCards = [];
    
    for (let i = 0; i < 3; i++) {
      const randomCard = await CardRepository.getRandomCard();
      if (!randomCard) {
        throw new Error("Erreur lors de la génération des cartes du booster.");
      }
      
      await UserCardRepository.addUserCard(userId, randomCard.id, 1);
      boosterCards.push(randomCard);
    }

    return boosterCards;
  } catch (error) {
    throw new Error("Erreur lors de l'ouverture du booster : " + error.message);
  }
}
