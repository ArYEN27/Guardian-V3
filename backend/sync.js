// sync.js
import sequelize from './config/database.js';
import User from './db_models/User.js';
import History from './db_models/History.js';

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();
