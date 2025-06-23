const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    frame: false,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,       // wajib true
      enableRemoteModule: false,    // aman
      nodeIntegration: false        // wajib false untuk keamanan
    }
  });

  mainWindow.loadFile('index.html');

  ipcMain.on('minimize', () => {
    if (mainWindow) mainWindow.minimize();
  });

  ipcMain.on('close', () => {
    if (mainWindow) mainWindow.close();
  });

  ipcMain.on('set-always-on-top', (_, val) => {
    if (mainWindow) mainWindow.setAlwaysOnTop(val);
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
