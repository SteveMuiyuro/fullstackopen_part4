require("dotenv").config();

const PORT = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

module.exports = {
  mongoUrl,
  PORT,
};
