import {
  ConflictError,
  BadRequestError,
  NotFoundError,
} from "../errors/api.error.js";
import { MissionRepository } from "../repositories/index.repository.js";

export async function getMissionById(id) {
  const mission = await MissionRepository.getMissionById(id);

  if (!mission) {
    throw new NotFoundError("La mission n'existe pas.");
  }

  return {
    id: mission.id,
    title: mission.title,
    description: mission.description,
  };
}

export async function createMission({ title, description }) {
  if (!title || title.length < 3 || !/^[a-zA-Z ]+$/.test(title)) {
    throw new BadRequestError("title non valide (3 caractères min, etc.)");
  }

  if (await MissionRepository.missionExists(title)) {
    throw new ConflictError("La mission existe déjà (title).");
  }

  const mission = await MissionRepository.createMission({ title, description });

  return mission.dataValues;
}

export async function updateMission(id, { title, description}) {
  if (!title || title.length < 3 || !/^[a-zA-Z ]+$/.test(title)) {
    throw new BadRequestError("title non valide (3 caractères min, etc.)");
  }

  if (await MissionRepository.missionExists(title)) {
    throw new ConflictError("La mission existe déjà (title).");
  }

  if (!await MissionRepository.getMissionById(id)) {
    throw new NotFoundError("La mission n'existe pas, id:");
  }

  const mission = await MissionRepository.updateMission(id, {
    title,
    description,
  });

  return mission.dataValues;
}

export async function deleteMission(id) {
  if (!(await getMissionById(id))) {
    throw new NotFoundError("La mission n'existe pas.");
  }

  return await MissionRepository.deleteMission(id);
}

export async function getAllMissions() {
  const Missions = await MissionRepository.getAllMissions();

  const formattedMissions = missions.map((mission) => {
    return {
      id: mission.id,
      title: mission.title,
      description: mission.description,
    };
  });

  return formattedMissions;
}

export async function restoreMission(id) {
  const restoredMission = await MissionRepository.restoreMission(id);

  if (!restoredMission) {
    throw new NotFoundError(
      "La mission n'existe pas. La mission ne peut pas être restauré."
    );
  }

  if (await MissionRepository.missionExists(restoredMission.title)) {
    throw new ConflictError("Le titre existe déjà. La mission ne peut pas être restauré.")
  }

  return restoredMission;
}