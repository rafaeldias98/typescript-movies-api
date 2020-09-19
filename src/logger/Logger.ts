import * as pino from 'pino';

export default function getLogger(): pino.Logger {
  return pino({ messageKey: 'message' });
}
