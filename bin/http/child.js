process.on("message", msg => {
  msg.hello = msg.hello.toUpperCase();
  msg.count++;
  process.send(msg);
});
