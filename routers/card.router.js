import express from "express";
import { CardController } from "../controllers/index.controller.js";

const router = express.Router();

router.get("/", CardController.getAllCards);
router.get("/:id", CardController.getCardById);
router.post("/", CardController.createCard);
router.put("/:id", CardController.updateCard);
router.delete("/:id", CardController.deleteCard);

export default router;
