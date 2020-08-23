export default {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.DB_SYNC === 'true',
  logging: false,
  entities: ['dist/src/entity/*.js'],
  migrations: ['src/migration/**/*.ts'],
  cli: {
    entitiesDir: 'dist/src/entity',
  },
};
