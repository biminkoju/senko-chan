const path = require('path')
const fs = require('fs')

module.exports = (client) => {
  const readFeatures = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))   //files yes
    for (const file of files) {                               //checking for the file
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readFeatures(path.join(dir, file))
      } else if (file !== 'load-features.js') {               //if the files is not loadfeature
        const feature = require(path.join(__dirname, dir, file))
        console.log(`Enabling feature "${file}"`)             //log the fie name
        feature(client)
      }
    }
  }

  readFeatures('.')
}
