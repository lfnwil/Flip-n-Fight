import express from 'express';
import cors from 'cors';
import path from 'path';
import sequelize from './config/database.js';
import heroRouter from './routers/hero.router.js';
import missionRouter from './routers/mission.router.js';
import { logMiddleware } from './middlewares/log.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { initializeHeroMock } from "./services/mock.service.js";

await sequelize.sync({ force: true });

await initializeHeroMock();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logMiddleware);
app.use(express.static(path.join(path.resolve(), 'public')));

app.use("/api/v1/heroes", heroRouter); 
app.use("/api/v1/missions", missionRouter);

app.get('/missions', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'public', 'missions.html'));
});

app.get('/heroes', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'public', 'heroes.html'));
});

app.get("/", (req, res) => {
  res.send("Bienvenue, Utilise /api/v1/heroes pour accéder à la liste des héros et /api/v1/missions pour accéder à la liste des missions.");
});

app.use(errorHandler);

app.listen(3000, () => console.log("Server écoute sur http://localhost:3000"));
