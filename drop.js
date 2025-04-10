import sequelize from './config/database.js';

async function dropAllTables() {
    try {
      await sequelize.drop();
      console.log("Toutes les tables ont été supprimées.");
    } catch (error) {
      console.error("Erreur lors de la suppression des tables:", error);
    } finally {
      await sequelize.close();
    }
  }
  
  dropAllTables();