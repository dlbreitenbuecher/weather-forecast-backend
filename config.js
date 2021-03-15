'use strict';

/** Shared config for application; can be req'd many places. */

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 5000;

module.exports = {
  SECRET_KEY,
  PORT
}