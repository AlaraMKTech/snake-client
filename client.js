const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost"
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handles incoming data and logs it for the player
  conn.on("data", (data) => {
    console.log("Incoming data: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server.");

    conn.write("Name: HMD");
  })

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
    connect
};