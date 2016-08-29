// run.js
var fs = require('fs');
var babel = require('babel-core');
var replacer = require('../src/index.js');

// read the filename from the command line arguments
var inputFileName = process.argv[2];
var outputFileName = process.argv[3];

// read the code from this file
fs.readFile(inputFileName, function(err, data) {
  if(err) throw err;

  // convert from a buffer to a string
  var src = data.toString();

  // use our plugin to transform the source
  var out = babel.transform(src, {
    plugins: [replacer]
  });

  // print the generated code to screen
  console.log(out.code);

  fs.writeFile(outputFileName, out.code, function (err) {
    if (err) {
      throw err;
    }

    console.log('look output in file: ' + outputFileName);
  });
});

