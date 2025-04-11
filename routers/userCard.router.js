import express from "express";
import { UserCardController } from "../controllers/index.controller.js";

const router = express.Router();

router.get("/", UserCardController.getAllUserCards);
router.get("/:id", UserCardController.getUserCardById);
router.post("/", UserCardController.createUserCard);
router.put("/:id", UserCardController.updateUserCard);
router.delete("/:id", UserCardController.deleteUserCard);
router.post("/:userCardId/assign-mission/:missionId", UserCardController.assignMissionToUserCard);
router.delete("/:userCardId/remove-mission/:missionId", UserCardController.removeMissionFromUserCard);
router.patch("/:id/restore", UserCardController.restoreUserCard);
router.get('/user/:userId', UserCardController.getUserCardsByUserId);

export default router;
