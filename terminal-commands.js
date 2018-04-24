const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });
};


module.exports.touch = () => {
  fs.writeFile(destination, data, (err) => {
    if (err) throw err;
    console.log('File has been saved!');
  });
}


module.exports.mkdir = () => {
  fs.mkDir(path, (err) => {
    if (err) throw err;
    console.log('Folder created!');
  });
}
