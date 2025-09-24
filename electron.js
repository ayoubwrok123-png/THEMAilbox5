const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
let mainWindow;

app.on('ready', () => {
  // Start backend
  spawn("node", ["server/index.js"], { stdio: "inherit" });

  // Create frontend window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: { nodeIntegration: false },
  });

  mainWindow.loadURL("http://localhost:5173"); // frontend dev server
});
