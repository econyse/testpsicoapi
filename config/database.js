module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      // host: env('DATABASE_HOST', '201.174.6.168'),
      // port: env.int('DATABASE_PORT', 3306),
      // database: env('DATABASE_NAME', 'testpsico'),
      // user: env('DATABASE_USERNAME', 'apps'),
      // password: env('DATABASE_PASSWORD', 'TicUttn2022'),
      // ssl: env.bool('DATABASE_SSL', false),
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'testpsico'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
