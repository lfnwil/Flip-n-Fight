import { UserCardService } from "../services/index.service.js";

export async function getAllUserCards(req, res, next) {
  try {
    const cards = await UserCardService.getAllUserCards();
    res.json(cards);
  } catch (error) {
    next(error);
  }
}

export async function getUserCardById(req, res, next) {
  try {
    const { id } = req.params;
    const card = await UserCardService.getUserCardById(id);
    res.json(card);
  } catch (error) {
    next(error);
  }
}

export async function createUserCard(req, res, next) {
  try {
    const newCard = await UserCardService.createUserCard(req.body);
    res.status(201).json(newCard);
  } catch (error) {
    next(error);
  }
}

export async function updateUserCard(req, res, next) {
  try {
    const { id } = req.params;
    const updatedCard = await UserCardService.updateUserCard(id, req.body);
    res.json(updatedCard);
  } catch (error) {
    next(error);
  }
}

export async function deleteUserCard(req, res, next) {
  try {
    const { id } = req.params;
    await UserCardService.deleteUserCard(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

export async function assignMissionToUserCard(req, res, next) {
  try {
    const { userCardId, missionId } = req.params;
    const updated = await UserCardService.assignMissionToUserCard(userCardId, missionId);
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

export async function removeMissionFromUserCard(req, res, next) {
  try {
    const { userCardId, missionId } = req.params;
    const updated = await UserCardService.removeMissionFromUserCard(userCardId, missionId);
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

export async function restoreUserCard(req, res, next) {
  try {
    const { id } = req.params;
    const restored = await UserCardService.restoreUserCard(id);
    res.json(restored);
  } catch (error) {
    next(error);
  }
}

export async function getUserCardsByUserId(req, res, next) {
  try {
    const { userId } = req.params;
    const userCards = await UserCardService.getUserCards(userId);
    res.json(userCards);
  } catch (error) {
    next(error);
  }
}
