import { app, BrowserWindow, screen } from "electron";
import path from "path";
import { isDev } from "./utils.js";

app.on('ready', () => {
  let display = screen.getAllDisplays()[0]
  const mainWindow = new BrowserWindow({
    width: display.workAreaSize.width,
    height: display.workAreaSize.height,
    center: true,
    maximizable: true,
    closable: true,
    autoHideMenuBar: true,
  })
  mainWindow.maximize()


  if (isDev()) {
    mainWindow.loadURL('http://localhost:5123')
  }
  else {
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-preact/index.html'))
  }

})
