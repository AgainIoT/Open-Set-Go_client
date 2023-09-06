import { atom } from "recoil";

export const token = atom({
  key: "token",
  default: null,
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
