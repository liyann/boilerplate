let fs = require("fs");
let path = require("path");
console.log(__filename);
let src = path.resolve(__dirname, "../.babelrc");
let rs = fs.createReadStream(src);
rs.on("data", function(chunk) {
  rs.pause();
  let str = chunk.toString("utf-8");
  console.log(str);
  //   rs.resume();
});

rs.on("end", () => {
  console.log("end");
});
