import { atom } from "recoil";

export const prTemplateState = atom({
  key: "prTemplateState",
  default: [],
});

export const prTemplateContent = atom({
  key: "prTemplateContent",
  default: "",
});
