import winston from "winston";
const { createLogger, transports } = winston;

const logger = createLogger({
  transports: [
    new transports.File({
      filename:
        "C:Userss559338DocumentsgdpSpring24-GDP1-Team2\talenthuntsrc\reduxerror.log",
      level: "error",
    }),
  ],
});

process.on("uncaughtException", (err) => {
  logger.error(`Uncaught Exception: ${err.message}`);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  logger.error(`Unhandled Rejection: ${err.message}`);
  process.exit(1);
});

module.exports = logger;
