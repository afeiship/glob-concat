/*!
 * name: @jswork/glob-concat
 * description: Glob concat files.
 * homepage: https://github.com/afeiship/glob-concat
 * version: 1.0.0
 * date: 2020-11-25 17:17:53
 * license: MIT
 */

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
