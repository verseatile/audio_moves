const path = require('path')

let envUrl;

if(process.argv[2] === "--dev" || "-d") {
    envUrl = `http://localhost:9000`
}

if(process.argv[2] === "--prod" || "-p") {
    envUrl = `file://${__dirname}/dist/index.html`
}

if(!process.argv[2]) {
    console.log('didnt specify arg, defaulting to dev server')
    envUrl = `http://localhost:9000`
}
// electron space
const fs = require('fs')
const {app, BrowserWindow} = require('electron')

let mainWindow = null;

let dirs = [];

(() => {
    // fs.readdirSync('./', (err, files) => {
    //     console.log(`\n${files}`)
    //     dirs += files
    // })

    let files = fs.readdirSync('./')
    console.log(files)

})()



app.on('ready', () => {
  //normal(); //executes promise
  console.log('app is ready')

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    show: false,
    titleBarStyle: 'hidden-inset'
  })

  mainWindow.loadURL(envUrl)

  // mainWindow.on('closed', function() {
  //   mainWindow = null;
  // });
  
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

})

let fetchBuffer = (file) => {
    __dirname + file
}

/* quit when closed  */


let quitWhenDone = new Promise(
  function(resolve, reject) {
    console.log(`electron here. Directory: ${__dirname}`)
    let piece = {
      info: "none yet",
      other: "some other"
    }
      resolve(piece) // will get passed to callback
      reject(new Error('something failed'))
  })

function normal() {
  quitWhenDone.then(function(passed) {
    console.log(passed)
    //app.quit();
  })
}
