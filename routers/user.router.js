import express from "express";
import { UserController } from "../controllers/index.controller.js";

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

router.post("/coins", UserController.updateUserCoins);
router.get("/:userId/collection", UserController.getUserCollection);

export default router;
