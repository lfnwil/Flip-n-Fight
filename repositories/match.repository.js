import Match from "../models/match.model.js";

export async function getAllMatches() {
  return await Match.findAll();
}

export async function getMatchById(id) {
  return await Match.findByPk(id);
}

export async function createMatch(data) {
  return await Match.create(data);
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