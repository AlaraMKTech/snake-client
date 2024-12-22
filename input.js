const { connect } = require('./client');

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    };

  switch (key) {
    case 'w':
      connection.write("Move: up");
      break;

    case 'a':
      connection.write("Move: left");
      break;

    case 's':
      connection.write("Move: down");
      break;

    case 'd':
      connection.write("Move: right");
      break;

    case '1':
      connection.write("Say: Hey there!");
      break;

    case '2':
      connection.write("Say: Good luck!(Not really)");
      break;

    case '3':
      connection.write("Say: How did you get so good??");
      break;

    case '4':
      connection.write("Say: I am the BEST!!");
      break;

    case '5':
      connection.write("Say: Victory is MINE!");
      break;

    default:
      console.log("Invalid key pressed");
  }
};

module.exports = {
  setupInput,
};