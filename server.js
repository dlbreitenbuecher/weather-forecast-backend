/** Server for Weather-Forecast App */

const app = require("./app");
const { PORT } = require("./config");


app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}!`);
});