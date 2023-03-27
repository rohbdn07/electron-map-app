import { app, BrowserWindow } from "electron";
import "reflect-metadata"; // Required by TypoORM.

import { createAppWindow } from "./appWindow";
import { dbConnection } from "./database/connection";
import service from "./services/userService";

// require('update-electron-app')({
//   repo: 'github-user/repo',
//   updateInterval: '1 hour',
//   logger: require('electron-log')
// })


/**
 * This section is the 'MAIN process hub' in which 'electron' communicate to WINDOW system
 * and acts as a backend unit of the application.
 */

if (require("electron-squirrel-startup")) {
  app.quit();
}

// call to connect database
dbConnection();

app.on("ready", createAppWindow);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createAppWindow();
  }
});
// /**
//  * Main process communicate to ------> Services(business logics hub)
//  */
service.userService();

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
