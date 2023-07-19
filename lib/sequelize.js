import * as pg from "pg";
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.CONNECTIONURI, {
  dialectModule: pg,
});

export default sequelize;
