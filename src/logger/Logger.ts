import { Logger, format, createLogger, transports } from 'winston';

const { combine, json, timestamp } = format;

export default function getLogger(): Logger {
  return createLogger({
    format: combine(timestamp(), json()),
    transports: [new transports.Console()],
    defaultMeta: {
      service: {
        name: 'movies_api',
      },
    },
  });
}
