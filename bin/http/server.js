let http = require("http");
let fs = require("fs");
let path = require("path");
let MIME = {
  ".css": "text/css",
  ".js": "application/javascript"
};

function validateFile(pathnames, callback) {
  (function next(i, len) {
    if (i < len) {
      fs.stat(pathnames[i], function(err, stats) {
        if (err) {
          callback(err);
        } else if (!stats.isFile()) {
          callback(new Error(`${pathnames[i]} :It is not a file!`));
        } else {
          next(i + 1, len);
        }
      });
    } else {
      callback(null, pathnames);
    }
  })(0, pathnames.length);
}

function outputFiles(pathnames, writer) {
  (function next(i, len) {
    if (i < len) {
      let reader = fs.createReadStream(pathnames[i]);
      reader.pipe(writer, { end: false });
      reader.on("end", function() {
        next(i + 1, len);
      });
    } else {
      writer.end();
    }
  })(0, pathnames.length);
}

function parseURL(root, url) {
  let base, pathnames, parts;
  if (url.indexOf("??") === -1) {
    url = url.replace("/", "/??");
  }
  parts = url.split("??");
  base = parts[0];
  console.log(parts[1]);
  pathnames = parts[1].split(",").map(function(value) {
    return path.join(root, base, value);
  });
  return {
    mime: MIME[path.extname(pathnames[0])] || "text/plain", //extname:获得文件名的后缀名
    pathnames: pathnames
  };
}

function main(argv) {
  let config = JSON.parse(fs.readFileSync(argv[0], "utf-8")),
    root = config.root || ".",
    port = config.port || 80,
    server;
  server = http
    .createServer(function(request, response) {
      let urlInfo = parseURL(root, request.url);
      console.log(urlInfo);
      validateFile(urlInfo.pathnames, function(err, pathnames) {
        if (err) {
          response.writeHead(400);
          response.end(err.message);
        } else {
          response.writeHead(200, {
            "Content-Type": urlInfo.mime
          });
          outputFiles(pathnames, response);
        }
      });
    })
    .listen(port);

  process.on("SIGTERM", function() {
    server.close(function() {
      process.exit(0);
    });
  });
}

main(process.argv.slice(2));
