import User from "../models/User.model.js";
import Deck from "../models/Deck.model.js";
import UserCard from "../models/UserCard.model.js";
import Card from "../models/Card.model.js";

// Créer un utilisateur
export async function createUser({ username, email, password, coins = 0 }) {
  return await User.create({ username, email, password, coins });
}

//  Récupérer un utilisateur par ID
export async function getUserById(id) {
  return await User.findByPk(id);
}

//  Mettre à jour un utilisateur
export async function updateUser(id, values) {
  const user = await getUserById(id);
  if (!user) return null;
  return await user.update(values);
}

// Supprimer un utilisateur
export async function deleteUser(id) {
  const user = await getUserById(id);
  if (!user) return null;
  await user.destroy();
  return true;
}

//Lister tous les utilisateurs
export async function getAllUsers() {
  return await User.findAll();
}

//Vérifier existence d’un utilisateur par email
export async function userExistsByEmail(email) {
  const user = await User.findOne({ where: { email } });
  return Boolean(user);
}

//Vérifier existence d’un utilisateur par pseudo
export async function userExistsByUsername(username) {
  const user = await User.findOne({ where: { username } });
  return Boolean(user);
}

// Récupérer les decks d’un utilisateur
export async function getUserDecks(userId) {
  const user = await User.findByPk(userId, {
    include: [{ model: Deck }],
  });
  return user ? user.Decks : null;
}

// Récupérer la collection de cartes d’un utilisateur
export async function getUserCards(userId) {
  const user = await User.findByPk(userId, {
    include: [
      {
        model: Card,
        through: { model: UserCard, attributes: ["quantity"] },
      },
    ],
  });

  if (!user) return null;

  return user.Cards.map(card => ({
    id: card.id,
    name: card.name,
    type: card.type,
    rarity: card.rarity,
    description: card.description,
    quantity: card.UserCard.quantity,
  }));
}
