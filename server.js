const http = require("http");

const app = require("./app");
const sequelize = require("./startup/db");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => {
  try {
    await sequelize.sync({});
    console.log("The database is synced");

    server.listen(PORT, () => {
      console.log(`The server is listening on port ${PORT}...`);
    });
  } catch (err) {
    console.log(`Could not start a server due to the following error: `, err);
  }
};

startServer();
