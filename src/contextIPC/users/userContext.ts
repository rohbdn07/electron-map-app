import { ipcRenderer } from "electron";
import { UserData } from "../../app/redux/userSlice";

const userContext = {

  getAllUser(channel: string) {
    return ipcRenderer.invoke(channel);
  },

  addUser(obj: UserData) {
    console.log(obj)
    return ipcRenderer.invoke("addUser", obj);
  },

  deleteUser(id: string): void {
    ipcRenderer.send("deleteUser", id);
  },
  toggleDarkMode(channel: string) {
    return ipcRenderer.invoke(channel);
  },
};

export type userContextApi = typeof userContext;

export default userContext;
