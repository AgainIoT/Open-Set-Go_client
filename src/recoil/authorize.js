import { atom } from "recoil";

export const isLogin = atom({
  key: "isLogin",
  default: false,
});

export const avatar = atom({
  key: "avatar",
  default: null,
});
export const id = atom({
  key: "id",
  default: "guest",
});
export const name = atom({
  key: "name",
  default: "",
});
