const jsonServer = require("json-server");
// Create a server for Employee
const EmpServer = jsonServer.create();
// create middleware
const middleware = jsonServer.defaults();

// Define route for json file in server

const route = jsonServer.router("db.json");

//set up port for running server app
const PORT = process.env.PORT || 3000;

EmpServer.use(middleware);
EmpServer.use(route);
EmpServer.listen(PORT, () => {
  console.log(
    `MEdia player server started at port ${PORT} and waiting for client request`
  );
});
