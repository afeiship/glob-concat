var fs = require('fs');
var glob = require('globby');

module.exports = function (inPattern, inDestFilename) {
  var files = glob.sync(inPattern);
  var contents = files
    .filter(function (file) {
      return fs.lstatSync(file).isFile();
    })
    .map(function (file) {
      return fs.readFileSync(file).toString();
    });

  fs.writeFileSync(inDestFilename, contents.join(''));
};
