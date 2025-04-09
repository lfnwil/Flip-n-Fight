// seed-test.js
import sequelize from "./config/database.js";
import * as Repositories from "./repositories/index.repository.js";

import mockCards from "./mocks/cards.mock.js";
import { mockUser } from "./mocks/users.mock.js";
import { mockDeck } from "./mocks/decks.mock.js";
import { mockMatch } from "./mocks/matches.mock.js";

async function seed() {
  try {
    await sequelize.sync({ force: true });
    console.log("✅ Database synced.");

    // Create user
    const user = await Repositories.createUser(mockUser());
    console.log("👤 User created:", user.username);

    // Create deck
    const deck = await Repositories.createDeck(mockDeck({ user_id: user.id }));
    console.log("🃏 Deck created:", deck.name);

    // Create cards
    const createdCards = [];
    for (const card of mockCards) {
      const c = await Repositories.createCard(card);
      createdCards.push(c);
    }
    console.log("📦 Cards inserted:", createdCards.length);

    // Add cards to deck
    for (const card of createdCards.slice(0, 5)) {
      await Repositories.addCardToDeck(deck.id, card.id);
    }
    console.log("🔗 Cards linked to deck");

    // Create a match
    const match = await Repositories.createMatchWithPlayers(
        mockMatch({ player1_id: user.id, player2_id: user.id })
    );
      
    console.log("⚔️  Match created:", match.id);

    console.log("✅ Seed completed.");
  } catch (err) {
    console.error("❌ Error during seed:", err);
  } finally {
    await sequelize.close();
  }
}

seed();