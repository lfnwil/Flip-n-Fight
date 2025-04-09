export function mockUser(overrides = {}) {
    return {
      username: "user_" + Math.floor(Math.random() * 1000),
      password: "securepass123",
      coins: 100,
      ...overrides,
    };
  }
  