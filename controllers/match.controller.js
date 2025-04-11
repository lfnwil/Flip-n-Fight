import { MatchService } from "../services/index.service.js";

export async function getAllMatchs(req, res, next) {
  try {
    const matches = await MatchService.getAllMatches();
    res.json(matches);
  } catch (error) {
    next(error);
  }
}

export async function getMatchById(req, res, next) {
  try {
    const id = req.params.id;
    const match = await MatchService.getMatchById(id);
    res.json(match);
  } catch (error) {
    next(error);
  }
}

export async function createMatch(req, res, next) {
  try {
    const { player1Id, player2Id, winnerId } = req.body;
    const newMatch = await MatchService.createMatch(player1Id, player2Id, winnerId);
    res.json(newMatch);
  } catch (error) {
    next(error);
  }
}

export async function updateMatch(req, res, next) {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updatedMatch = await MatchService.updateMatch(id, updates);
    res.json(updatedMatch);
  } catch (error) {
    next(error);
  }
}

export async function deleteMatch(req, res, next) {
  try {
    const id = req.params.id;
    const deletedMatch = await MatchService.deleteMatch(id);
    res.json(deletedMatch);
  } catch (error) {
    next(error);
  }
}

export async function assignMissionToMatch(req, res, next) {
  try {
    // exemple
    const { matchId, missionId } = req.params;
    const updated = await MatchService.assignMissionToMatch(matchId, missionId);
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

export async function removeMissionFromMatch(req, res, next) {
  try {
    const { matchId, missionId } = req.params;
    const updated = await MatchService.removeMissionFromMatch(matchId, missionId);
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

export async function restoreMatch(req, res, next) {
  try {
    const { id } = req.params;
    const restored = await MatchService.restoreMatch(id);
    res.json(restored);
  } catch (error) {
    next(error);
  }
}
