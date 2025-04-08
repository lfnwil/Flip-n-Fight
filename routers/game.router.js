import express from "express";
import { HeroController } from "../controllers/index.controller.js";

const router = express.Router()

router.get("/", HeroController.getAllHeroes);
router.get("/:id", HeroController.getHeroById);
router.post("/", HeroController.createHero);
router.put("/:id", HeroController.updateHero);
router.delete("/:id", HeroController.deleteHero);
router.post("/:heroId/assign-mission/:missionId", HeroController.assignMissionToHero);
router.delete("/:heroId/remove-mission/:missionId", HeroController.removeMissionFromHero);

router.patch("/:id/restore", HeroController.restoreHero)

export default router;