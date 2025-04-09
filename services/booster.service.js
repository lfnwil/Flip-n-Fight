import { NotFoundError } from "../errors/api.error.js";
import { 
  getDeckByUserId 
} from "../repositories/deck.repository.js";
import { 
  getRandomCards 
} from "../repositories/card.repository.js";
import { 
  addCardToDeck 
} from "../repositories/deckCard.repository.js";

export async function createBoosterForUser(user_id, cardCount = 3) {
  const deck = await getDeckByUserId(user_id);
  if (!deck) {
    throw new NotFoundError("Aucun deck trouvé pour cet utilisateur");
  }

  const randomCards = await getRandomCards(cardCount);

  for (const card of randomCards) {
    await addCardToDeck(deck.id, card.id);
  }

  return randomCards;
}