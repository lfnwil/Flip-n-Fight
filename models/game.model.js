import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

// ./models/User.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  coins: { type: DataTypes.INTEGER, defaultValue: 0 },
});

export default User;


// ./models/Card.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Card = sequelize.define("cards", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  type: {
    type: DataTypes.ENUM("attack", "defense", "heal", "special", "malus", "bonus"),
    allowNull: false,
  },
  rarity: {
    type: DataTypes.ENUM("common", "rare", "epic", "legendary"),
    allowNull: false,
  },
  color: { type: DataTypes.STRING, allowNull: false },
});

export default Card;


// ./models/UserCard.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const UserCard = sequelize.define("user_cards", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  card_id: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
});

export default UserCard;


// ./models/Deck.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Deck = sequelize.define("decks", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  name: { type: DataTypes.STRING, defaultValue: "Main Deck" },
});

export default Deck;


// ./models/DeckCard.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const DeckCard = sequelize.define("deck_cards", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  deck_id: { type: DataTypes.INTEGER, allowNull: false },
  card_id: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, defaultValue: 2 },
});

export default DeckCard;


// ./models/Match.js
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Match = sequelize.define("matches", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  player1_id: { type: DataTypes.INTEGER, allowNull: false },
  player2_id: { type: DataTypes.INTEGER, allowNull: false },
  winner_id: { type: DataTypes.INTEGER },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

export default Match;
