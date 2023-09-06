import { atom } from "recoil";

export const templateState = atom({
  key: "templateState",
  default: [],
});

export const templateContent = atom({
  key: "templateContent",
  default: "",
});

export const templateToModal = atom({
  key: "templateContent",
  default: "",
});
