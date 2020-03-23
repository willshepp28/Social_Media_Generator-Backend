module.exports = {
  development : {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: console.log
  },
  test: {
    username: DB_USER_TEST,
    password: DB_PASSWORD_TEST,
    database: DB_NAME_TEST,
    host: DB_HOST_TEST,
    dialect : 'postgres',
    logging: console.log
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true
      }
    },
    ssl: true
  }
}