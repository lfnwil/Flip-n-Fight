import { MatchRepository } from "../repositories/index.repository.js";

export async function getAllMatches() {
  try {
    return await MatchRepository.getAllMatches();
  } catch (error) {
    throw new Error("Erreur lors de la récupération des matchs.");
  }
}

export async function getMatchById(id) {
  try {
    const match = await MatchRepository.getMatchById(id);
    if (!match) {
      throw new Error("Match non trouvé.");
    }
    return match;
  } catch (error) {
    throw new Error("Erreur lors de la récupération du match.");
  }
}

export async function createMatch(player1Id, player2Id, winnerId) {
  try {
    if (!player1Id || !player2Id || !winnerId) {
      throw new Error("Les identifiants des joueurs et du gagnant sont requis.");
    }
    return await MatchRepository.createMatch(player1Id, player2Id, winnerId);
  } catch (error) {
    throw new Error("Erreur lors de la création du match.");
  }
}

export async function updateMatch(id, updates) {
  try {
    const updatedMatch = await MatchRepository.updateMatch(id, updates);
    if (!updatedMatch) {
      throw new Error("Match non trouvé.");
    }
    return updatedMatch;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour du match.");
  }
}

export async function deleteMatch(id) {
  try {
    const deletedMatch = await MatchRepository.deleteMatch(id);
    if (!deletedMatch) {
      throw new Error("Match non trouvé.");
    }
    return deletedMatch;
  } catch (error) {
    throw new Error("Erreur lors de la suppression du match.");
  }
}

export async function createMatchWithPlayers(data) {
  try {
    return await MatchRepository.createMatchWithPlayers(data);
  } catch (error) {
    throw new Error("Erreur lors de la création du match avec les joueurs.");
  }
}
