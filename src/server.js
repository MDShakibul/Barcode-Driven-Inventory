import mongoose from 'mongoose';
import app from './app.js';
import config from './config/index.js';
import { logger, errorlogger } from './shared/logger.js';

process.on('uncaughtException', error => {
  errorlogger.error(error);
  process.exit(1);
});

let server;
async function connection() {
  try {
    await mongoose.connect(config.database_url);
    logger.info('Database Connect Successfully');

    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`);
    });
  } catch (err) {
    errorlogger.error('Failed to connect database', err);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
connection();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
