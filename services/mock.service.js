import {
  cardsMock,
  usersMock,
  decksMock,
  userCardsMock,
  deckCardsMock,
  matchesMock,
} from "../mocks/index.mock.js";

import {
  CardService,
  UserService,
  DeckService,
  UserCardService,
  DeckCardService,
  MatchService,
} from "./index.service.js";

export async function initializeGameMock() {
  // console.log("========== INITIALISATION DE LA BASE DE DONNÉES ==========");

  try {
    for (const user of usersMock) {
      const newUser = await UserService.createUser(user);
      // console.log("[USER]", newUser.username, "créé.");
    }

    for (const card of cardsMock) {
      const newCard = await CardService.createCard(card);
      // console.log("[CARD]", newCard.name, "créée.");
    }

    for (const deck of decksMock) {
      const newDeck = await DeckService.createDeck(deck.user_id, deck.name);
      // console.log("[DECK] pour user_id:", deck.user_id, "créé.");
    }

    for (const userCard of userCardsMock) {
      await UserCardService.addUserCard(
        userCard.user_id,
        userCard.card_id,
        userCard.quantity
      );
      // console.log("[USER_CARD] user", userCard.user_id, ">", userCard.card_id);
    }

    for (const deckCard of deckCardsMock) {
      await DeckCardService.addCardToDeck(
        deckCard.deck_id,
        deckCard.card_id,
        deckCard.quantity
      );
      // console.log("[DECK_CARD] deck", deckCard.deck_id, ">", deckCard.card_id);
    }

    for (const match of matchesMock) {
      const newMatch = await MatchService.createMatchWithPlayers(match);
      // onsole.log("[MATCH] créé avec ID:", newMatch.id);
    }

    console.log("✅ Base initialisée avec succès !");
  } catch (error) {
    console.error("❌ Erreur pendant l'initialisation :", error.message);
  }

  // console.log("========== FIN DE L'INITIALISATION ==========");
}
