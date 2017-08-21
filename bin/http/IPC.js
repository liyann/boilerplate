var child_process = require("child_process");
var child = child_process.spawn("node", ["child.js"], {
  stdio: [0, 1, 2, "ipc"]
});
let msg = { hello: "hello world", count: 0 };
child.on("message", msg => {
  console.log(msg);
  child.send({ hello: "hello world", count: msg.count++ });
});
child.send(msg);
