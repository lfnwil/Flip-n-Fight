import sequelize from "./config/database.js";
import { initializeGameMock } from "./services/mock.service.js";

async function resetDatabase() {
  try {
    console.log("Réinitialisation de la base de données...");

    await sequelize.drop();
    console.log("Toutes les tables ont été supprimées.");

    await sequelize.sync({ force: true });
    console.log("Toutes les tables ont été recréées.");

    await initializeGameMock();

    console.log("Base de données réinitialisée avec succès.");
  } catch (error) {
    console.error("Erreur pendant le reset :", error.message);
  } finally {
    await sequelize.close();
  }
}

resetDatabase();
