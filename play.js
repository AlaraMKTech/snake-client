const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost"
    port: 4455
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handles incoming data and logs it for the player
  conn.on("data", (data) => {
    console.log("Incoming data: ", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();