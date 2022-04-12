import Cookies from "js-cookie";
import { IUser } from "../interfaces/IUser";

const userIdCookieName = "suntec-user-id";
const userInfoCookieName = "suntec-user-info";


export function GetUserId() {
  const userId = Cookies.get(userIdCookieName);
  if (userId !== null && userId !== undefined) return userId;
  return undefined;
}
export function GetUserInfo() {
  const info = Cookies.get(userInfoCookieName);

  if (info === undefined) {
    return null;
  }
  const hydratedUserInfo = JSON.parse(info);
  return hydratedUserInfo;
}

export function SetUserId(userId: string) {
  Cookies.set(userIdCookieName, userId);
}

export function SetUserInfo(userInfo: IUser) {
  Cookies.set(userInfoCookieName, userInfo);
}

export function RemoveUserInfo() {
  Cookies.remove(userInfoCookieName);
}

export function RemoveUserId() {
  Cookies.remove(userIdCookieName);
}


export function Logout() {
  RemoveUserInfo();
  RemoveUserId();
}
