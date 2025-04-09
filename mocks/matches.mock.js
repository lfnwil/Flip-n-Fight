export function mockMatch(overrides = {}) {
    return {
      player1Id: overrides.player1Id || 1,
      player2Id: overrides.player2Id || 2,
      winnerId: null,
      ...overrides,
    };
  }
  