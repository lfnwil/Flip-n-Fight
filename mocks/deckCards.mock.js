export function mockDeckCard(overrides = {}) {
    return {
      deckId: overrides.deckId || 1,
      cardId: overrides.cardId || 1,
      ...overrides,
    };
  }
  