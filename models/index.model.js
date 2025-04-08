import sequelize from "../config/database.js";

import User from "./user.model.js";
import Card from "./card.model.js";
import UserCard from "./userCard.model.js";
import Deck from "./deck.model.js";
import DeckCard from "./deckcard.model.js";
import Match from "./match.model.js";

User.hasMany(UserCard, { foreignKey: "userId" });
UserCard.belongsTo(User, { foreignKey: "userId" });

Card.hasMany(UserCard, { foreignKey: "cardId" });
UserCard.belongsTo(Card, { foreignKey: "cardId" });

User.hasMany(Deck, { foreignKey: "userId" });
Deck.belongsTo(User, { foreignKey: "userId" });

Deck.hasMany(DeckCard, { foreignKey: "deckId" });
DeckCard.belongsTo(Deck, { foreignKey: "deckId" });

Card.hasMany(DeckCard, { foreignKey: "cardId" });
DeckCard.belongsTo(Card, { foreignKey: "cardId" });

User.hasMany(Match, { foreignKey: "player1Id", as: "MatchesAsPlayer1" });
User.hasMany(Match, { foreignKey: "player2Id", as: "MatchesAsPlayer2" });
User.hasMany(Match, { foreignKey: "winnerId", as: "MatchesAsWinner" });

Match.belongsTo(User, { foreignKey: "player1Id", as: "Player1" });
Match.belongsTo(User, { foreignKey: "player2Id", as: "Player2" });
Match.belongsTo(User, { foreignKey: "winnerId", as: "Winner" });

export {
  sequelize,
  User,
  Card,
  UserCard,
  Deck,
  DeckCard,
  Match,
};
