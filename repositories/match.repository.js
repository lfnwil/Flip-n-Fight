import { Match } from "../models/index.model.js";

export async function getAllMatches() {
  return await Match.findAll();
}

export async function getMatchById(id) {
  return await Match.findByPk(id);
}

export async function createMatch(player1Id, player2Id, winnerId) {
  return await Match.create({
    player1_id: player1Id,
    player2_id: player2Id,
    winner_id: winnerId,
    created_at: new Date()
  });
}

export async function updateMatch(id, updates) {
  const match = await Match.findByPk(id);
  if (!match) return null;
  return await match.update(updates);
}

export async function deleteMatch(id) {
  const match = await Match.findByPk(id);
  if (!match) return null;
  return await match.destroy();
}

export async function createMatchWithPlayers(data) {
  return await Match.create(data);
}