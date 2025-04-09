export function mockDeck(overrides = {}) {
    return {
      name: "Test Deck",
      userId: overrides.userId || 1,
      ...overrides,
    };
  }
  