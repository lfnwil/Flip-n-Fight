import { MissionService } from "../services/index.service.js";

export async function getAllMissions(req, res, next) {
  try {
    const missions = await MissionService.getAllMissions();
    res.json(missions);
  } catch (error) {
    next(error)
  }
}

export async function getMissionById(req, res, next) {
  try {
    const id = req.params.id;
    const mission = await MissionService.getMissionById(id);
    res.json(mission);
  } catch (error) {
    next(error)
  }
}

export async function createMission(req, res, error) {
  try {
    const { title, description } = req.body;
    const newMission = await MissionService.createMission({
      title,
      description,
    });
    res.json(newMission);
  } catch (error) {
    next(error)
  }
}

export async function updateMission(req, res, next) {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const updatedMission = await MissionService.updateMission(id, {
      title,
      description,
    });
    res.json(updatedMission);
  } catch (error) {
    next(error)
  }
}

export async function deleteMission(req, res, next) {
  try {
    const id = req.params.id;
    const deletedMission = await MissionService.deleteMission(id);
    res.json(deletedMission);
  } catch (error) {
    next(error)
  }
}

export async function restoreMission(req, res, next) {
  try {
    const id = req.params.id;
    const restoredMission = await MissionService.restoreHero(id);
    res.json(restoredMission);
  } catch (error) {
    next(error)
  }
}