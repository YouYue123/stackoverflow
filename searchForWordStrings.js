const path = require('path');
const fs = require('fs');

function isFileContainsString(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, function (err, data) {
      if (err) {
        reject(error)
      }
      if(data.indexOf('search string') >= 0){
       resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}
function fromDir(startPath, filename, ext) {
  if (!fs.existsSync(startPath)) {
      console.log('Dir not found', startPath);
      return;
  }
  const files = fs.readdirSync(startPath);
  let found = files.find(async (file) => {
      let thisFilename = path.join(startPath, file);
      let stat = fs.lstatSync(thisFilename);
      console.log(thisFilename)
      if (stat.isDirectory()) {
          fromDir(thisFilename, filename, ext);
      } else {
          console.log(thisFilename)
          if (await isFileContainsString(thisFilename)) {
              return true;
          }
      }
  })

  if (found) {
      console.log('-- Good news! file: ', filename, ext);
      console.log('-- Was found in folder: ', __dirname, '/', startPath);
  }

  if (!found) {
      console.log(startPath, '-- Folder checked noting else found');
  }
}

fromDir('./', process.argv[3], process.argv[2]);

