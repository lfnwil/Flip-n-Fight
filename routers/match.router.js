import express from "express";
import { MatchController } from "../controllers/index.controller.js";

const router = express.Router();

router.get("/", MatchController.getAllMatchs);
router.get("/:id", MatchController.getMatchById);
router.post("/", MatchController.createMatch);
router.put("/:id", MatchController.updateMatch);
router.delete("/:id", MatchController.deleteMatch);
router.post("/:matchId/assign-mission/:missionId", MatchController.assignMissionToMatch);
router.delete("/:matchId/remove-mission/:missionId", MatchController.removeMissionFromMatch);
router.patch("/:id/restore", MatchController.restoreMatch);

export default router;
