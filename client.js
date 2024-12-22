const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Incoming data: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
    conn.write("Name: HMD");
  });

  return conn;
};

module.exports = {
  connect
};