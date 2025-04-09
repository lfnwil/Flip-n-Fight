import { HeroService } from "../services/index.service.js";

export async function getAllCard(req, res, next) {
  try {
    const heroes = await HeroService.getAllHeroes();
    res.json(heroes);
  } catch (error) {
    next(error)
  }
}

export async function getHeroById(req, res, next) {
  try {
    const id = req.params.id;
    const hero = await HeroService.getHeroById(id);
    res.json(hero);
  } catch (error) {
    next(error)
  }
}

export async function createHero(req, res, error) {
  try {
    const { alias, identity, power, powerDate } = req.body;
    const newHero = await HeroService.createHero({
      alias,
      identity,
      power,
      powerDate,
    });
    res.json(newHero);
  } catch (error) {
    next(error)
  }
}

export async function updateHero(req, res, next) {
  try {
    const id = req.params.id;
    const { alias, identity, power, powerDate } = req.body;
    const updatedHero = await HeroService.updateHero(id, {
      alias,
      identity,
      power,
      powerDate,
    });
    res.json(updatedHero);
  } catch (error) {
    next(error)
  }
}

export async function deleteHero(req, res, next) {
  try {
    const id = req.params.id;
    const deletedHero = await HeroService.deleteHero(id);
    res.json(deletedHero);
  } catch (error) {
    next(error)
  }
}

export async function restoreHero(req, res, next) {
  try {
    const id = req.params.id;
    const restoredHero = await HeroService.restoreHero(id);
    res.json(restoredHero);
  } catch (error) {
    next(error)
  }
}

export async function assignMissionToHero(req, res, next) {
  try {
    const { heroId, missionId } = req.body;
    const assignedMission = await HeroService.assignMissionToHero(heroId, missionId);
    res.json(assignedMission);
  } catch (error) {
    next(error);
  }
}

export async function removeMissionFromHero(req, res, next) {
  try {
    const { heroId, missionId } = req.body;
    const result = await HeroService.removeMissionFromHero(heroId, missionId);
    res.json(result);
  } catch (error) {
    next(error);
  }
}
