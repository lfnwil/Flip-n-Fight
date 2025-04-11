import express from "express";
import { DeckController } from "../controllers/index.controller.js";

const router = express.Router();

router.get("/", DeckController.getAllDecks);
router.get("/:id", DeckController.getDeckById);
router.get("/user/:userId", DeckController.getDeckByUserId);
router.get("/:id/cards", DeckController.getDeckWithCards);
router.post("/", DeckController.createDeck);
router.put("/:id", DeckController.updateDeck);
router.delete("/:id", DeckController.deleteDeck);

export default router;
