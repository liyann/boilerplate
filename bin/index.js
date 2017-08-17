let fs = require("fs");
function copy(src, dst) {
  // fs.writeFileSync(src, fs.readFileSync(dst)); /* 小文件拷备 */
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
function main(argv) {
  console.log(argv[0], argv[1]);
  copy(argv[0], argv[1]);
}
main(process.argv.slice(2)); //process全局变量,process.argv命令行参数,process.argv[0]:nodeJS执行程序的绝对路径
// console.log(process.argv);
