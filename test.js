const fs = require("fs");

const Csv = fs.readFile("./bas.csv", "utf8", function (err, data) {
  if(err) {
    console.log(err);
  }
});

console.log(Csv);

