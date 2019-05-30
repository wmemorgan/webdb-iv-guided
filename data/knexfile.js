module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './lambda.db3', // the folder will be created when we run the migrations
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
  },
};
