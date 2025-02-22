import { heroesMocks } from "../mocks/hero.mock.js";
import { missionsMocks } from "../mocks/mission.mock.js";
import { HeroService, MissionService } from "./index.service.js";

export async function initializeHeroMock() {
  console.log("========== START HERO & MISSION MOCKING ==========");

  for (const hero of heroesMocks) {
    try {
      const newHero = await HeroService.createHero(hero);
      console.log("[HERO ADDED]", newHero);
    } catch (error) {
      console.log("[ERROR ADDING HERO]", error.message);
    }
  }

  for (const mission of missionsMocks) {
    try {
      const newMission = await MissionService.createMission(mission);
      console.log("[MISSION ADDED]", newMission);
    } catch (error) {
      console.log("[ERROR ADDING MISSION]", error.message);
    }
  }

  try {
    const heroes = await HeroService.getAllHeroes();
    const missions = await MissionService.getAllMissions();

    if (heroes.length > 0 && missions.length > 0) {
      await HeroService.assignMissionToHero(heroes[0].id, missions[0].id);
      await HeroService.assignMissionToHero(heroes[1].id, missions[1].id);
    }

    console.log("✅ Missions assignées aux héros !");
  } catch (error) {
    console.log("[ERROR ASSIGNING MISSIONS]", error.message);
  }

  console.log("========== END HERO & MISSION MOCKING ==========");
  return await HeroService.getAllHeroes();
}
