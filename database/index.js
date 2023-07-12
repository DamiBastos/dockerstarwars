const server = require("./src/server");

const PORT = 8004;

// const { Character, Film, Planet } = require("./src/database");

// Character.list().then((res) => console.log(res));
// Film.list().then((res) => console.log(res));
// Planet.list().then((res) => console.log(res));

//Character.get(1).then((res) => console.log(res));

server.listen(8004, () => {
  console.log(`Database service on port ${PORT}`);
});
