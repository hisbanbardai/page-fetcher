const request = require("request");
const fs = require("fs");

//Saving URL and filepath in an array
const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  if (error) {
    console.error(err);
  }
  //Writing response.body in the file
  fs.writeFile(args[1], body, (err) => {
    if (err) {
      console.error(err);
    }
    //Getting the stats of the newly written file
    fs.stat(args[1], (err, stats) => {
      if (err) {
        console.error(err);
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${args[1]}`);
    });
  });
});
