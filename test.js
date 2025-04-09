// testRepo.js

import { sequelize } from "./models/index.model.js";

// Importation des fonctions des différentes couches de repository
import {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
  getCardsByRarity
} from "./repositories/card.repository.js";

import {
  getDeckByUserId,
  createDeck
} from "./repositories/deck.repository.js";

import {
  addCardToDeck,
  removeCardFromDeck
} from "./repositories/deckCard.repository.js";

import {
  createMatch,
  getMatchById
} from "./repositories/match.repository.js";

import {
  getUserById,
  createUser,
  updateUser,
  updateUserCoins,
  getUserCollection
} from "./repositories/user.repository.js";

import {
  getUserCards,
  addUserCard
} from "./repositories/userCard.repository.js";

async function runRepositoryTests() {
  console.log("=== Début des tests de la couche repositories ===\n");

  // Synchronisation de la base (supprime et recrée les tables)
  try {
    await sequelize.sync({ force: true });
    console.log("Base de données synchronisée.\n");
  } catch (syncError) {
    console.error("Erreur de synchronisation de la base :", syncError);
    process.exit(1);
  }

  // --------- Test Card Repository ---------
  try {
    console.log(">> Test Card Repository");
    // Création d'une carte
    const newCardData = {
      name: "Test Card",
      type: "attack",
      rarity: "rare",
      color: "purple",
      image: "test.png"
    };
    const createdCard = await createCard(newCardData);
    console.log("Carte créée :", createdCard);

    // Récupération de la carte par son ID
    const fetchedCard = await getCardById(createdCard.id);
    console.log("Carte récupérée par ID :", fetchedCard);

    // Mise à jour de la carte
    const updatedCard = await updateCard(createdCard.id, { name: "Test Card Updated" });
    console.log("Carte mise à jour :", updatedCard);

    // Suppression de la carte
    const deleteResult = await deleteCard(createdCard.id);
    console.log("Carte supprimée :", deleteResult);

    // Création de quelques cartes supplémentaires pour tester getCardsByRarity
    await createCard({ name: "Epic Card 1", type: "attack", rarity: "epic", color: "orange", image: "epic1.png" });
    await createCard({ name: "Epic Card 2", type: "special", rarity: "epic", color: "red", image: "epic2.png" });
    const epicCards = await getCardsByRarity("epic");
    console.log("Cartes de rareté 'epic' :", epicCards);
  } catch (err) {
    console.error("Erreur dans le Card Repository :", err);
  }

  // --------- Test User Repository ---------
  try {
    console.log("\n>> Test User Repository");
    // Création d'un utilisateur
    const newUser = await createUser({ username: "player1", password: "password1", coins: 100 });
    console.log("Utilisateur créé :", newUser);

    // Récupération de l'utilisateur par son ID
    const user = await getUserById(newUser.id);
    console.log("getUserById :", user);

    // Mise à jour de l'utilisateur
    const updatedUser = await updateUser(newUser.id, { username: "player1_updated" });
    console.log("Utilisateur mis à jour :", updatedUser);

    // Mise à jour des coins de l'utilisateur
    const userAfterCoinsUpdate = await updateUserCoins(newUser.id, 50);
    console.log("Utilisateur après mise à jour des coins :", userAfterCoinsUpdate);

    // Pour tester getUserCollection, nous créons un deck pour cet utilisateur
    const userDeck = await createDeck(newUser.id, "Main Deck");
    console.log("Deck créé pour l'utilisateur :", userDeck);
  } catch (err) {
    console.error("Erreur dans le User Repository :", err);
  }

  // --------- Test Deck Repository ---------
  try {
    console.log("\n>> Test Deck Repository");
    // Récupération du deck de l'utilisateur
    const deck = await getDeckByUserId(1);
    console.log("getDeckByUserId(1) :", deck);

    // Création d'un nouveau deck pour test (pour l'utilisateur 1)
    const newDeck = await createDeck(1, "Test Repo Deck");
    console.log("Nouveau deck créé :", newDeck);
  } catch (err) {
    console.error("Erreur dans le Deck Repository :", err);
  }

  // --------- Test DeckCard Repository ---------
  try {
    console.log("\n>> Test DeckCard Repository");
    // Ajout d'une carte au deck.
    // Attention : assurez-vous que la carte (par exemple avec id 1) et le deck (par exemple avec id 1) existent.
    const addedDeckCard = await addCardToDeck(1, 1, 2);
    console.log("Carte ajoutée au deck (deck_id: 1, card_id: 1) :", addedDeckCard);

    // Suppression de la carte du deck
    await removeCardFromDeck(1, 1);
    console.log("Carte retirée du deck (deck_id: 1, card_id: 1)");
  } catch (err) {
    console.error("Erreur dans le DeckCard Repository :", err);
  }

  // --------- Test Match Repository ---------
  try {
    console.log("\n>> Test Match Repository");
    // Création d'un match entre l'utilisateur 1 et un utilisateur 2 (pour test, vous pouvez créer un second utilisateur)
    // Créons rapidement un second utilisateur si nécessaire.
    let user2 = await getUserById(2);
    if (!user2) {
      user2 = await createUser({ username: "player2", password: "password2", coins: 50 });
    }
    const newMatch = await createMatch(1, 2, 1);
    console.log("Match créé :", newMatch);

    const fetchedMatch = await getMatchById(newMatch.id);
    console.log("Match récupéré par ID :", fetchedMatch);
  } catch (err) {
    console.error("Erreur dans le Match Repository :", err);
  }

  // --------- Test UserCard Repository ---------
  try {
    console.log("\n>> Test UserCard Repository");
    // Ajout d'une carte à la collection de l'utilisateur.
    // Pour ce test, nous supposons que l'utilisateur 1 possède déjà des entrées ou non dans la table user_cards.
    const initialUserCards = await getUserCards(1);
    console.log("UserCards avant ajout :", initialUserCards);

    // Ajout de la carte avec id 1 à l'utilisateur 1
    const updatedUserCard = await addUserCard(1, 1, 2);
    console.log("addUserCard(1, 1, 2) exécuté :", updatedUserCard);

    const finalUserCards = await getUserCards(1);
    console.log("UserCards après ajout :", finalUserCards);
  } catch (err) {
    console.error("Erreur dans le UserCard Repository :", err);
  }

  console.log("\n=== Fin des tests de la couche repositories ===");
  process.exit(0);
}

runRepositoryTests()
  .catch(err => {
    console.error("Erreur globale lors des tests :", err);
    process.exit(1);
  });
