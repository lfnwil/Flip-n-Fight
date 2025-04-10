import express from "express";
import { DeckCardController } from "../controllers/index.controller.js";

const router = express.Router();

router.get("/", DeckCardController.getAllDeckCards);
router.get("/:id", DeckCardController.getDeckCardById);
router.get("/deck/:deckId", DeckCardController.getCardsInDeck);
router.post("/", DeckCardController.createDeckCard);
router.put("/:id", DeckCardController.updateDeckCard);
router.delete("/:id", DeckCardController.deleteDeckCard);
router.post("/add", DeckCardController.addCardToDeck);
router.post("/remove", DeckCardController.removeCardFromDeck);

export default router;
