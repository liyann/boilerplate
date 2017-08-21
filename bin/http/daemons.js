/* 守护进程 */
const cp = require("child_process");
let worker;
function spawn(server, config) {
  worker = cp.spawn("node", [server, config]);
  worker.on("exit", code => {
    if (code !== 0) {
      spawn(server, config);
    }
  });
}

function main(argv) {
  spawn("server.js", argv[0]);
  process.on("SIGTERM", () => {
    worker.kill();
    process.exit(0);
  });
}

main(process.argv.slice(2));
console.log("Server on http://localhost:3000");
