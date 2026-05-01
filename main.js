const { app, BrowserWindow } = require('electron');

// fungsi buat buka window aplikasi
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  // load website kamu
  win.loadFile('index.html');
}

// jalanin app
app.whenReady().then(() => {
  createWindow();
});