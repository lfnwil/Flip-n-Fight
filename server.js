import express from "express";
import cors from "cors";
import path from "path";
import sequelize from "./config/database.js";
import { CardRouter, UserRouter, DeckRouter, DeckCardRouter, UserCardRouter, MatchRouter } from "./routers/index.router.js";
import { logMiddleware } from "./middlewares/log.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { initializeGameMock } from "./services/mock.service.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logMiddleware);
app.use(express.static(path.join(path.resolve(), "public")));

app.use("/api/v1/cards", CardRouter);
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/decks", DeckRouter);
app.use("/api/v1/deck-cards", DeckCardRouter);
app.use("/api/v1/user-cards", UserCardRouter);
app.use("/api/v1/matches", MatchRouter);

app.get("/", (req, res) => {
  res.send("Bienvenue dans Flip 'n' Fight ! Utilisez les routes /api/v1/... pour accéder à l'API.");
});

app.use(errorHandler);

if (process.env.NODE_ENV !== "test") {
  const PORT = 3000;
  await sequelize.sync({ force: true });
  await initializeGameMock();
  app.listen(PORT, () => {
    console.log(`Server écoute sur http://localhost:${PORT}`);
  });
}

export default app;
