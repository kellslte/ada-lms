export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5433),
      database: env('DATABASE_NAME', 'ada_lms_collections'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '1290384756'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
