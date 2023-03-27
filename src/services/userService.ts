import { ipcMain, nativeTheme } from "electron";

import { UserData } from "../app/redux/userSlice";
import userRepo from "../repositories/usersRepo";

/** userService communicate to ---> repository(database) */
// ipcMain.handle() is generally used for bi-directional data exchange (i.e. to return data to its original caller)
const userService = () => {
  ipcMain.handle("getAllUser", () => {
    const response = userRepo.getAllUser();
    return response;
  });

  ipcMain.handle("addUser", async (event: Electron.Event, obj) => {
    const userCreated = await userRepo.addUser(obj);
    return userCreated;
  });

  ipcMain.on("deleteUser", (event: Electron.Event, id) => {
    userRepo.deleteUser(id);
  });

  ipcMain.handle("dark-mode:toggle", () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = "light";
    } else {
      nativeTheme.themeSource = "dark";
    }
    return nativeTheme.shouldUseDarkColors;
  });
};

export default {
  userService,
};
