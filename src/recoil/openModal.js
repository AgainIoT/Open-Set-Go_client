import { atom, atomFamily } from "recoil";

export const gitignoreOpenState = atom({
  key: "gitignoreOpenState",
  default: false,
});

export const issueTemplateState = atom({
  key: "issueTemplateState",
  default: false,
});

export const prOpenState = atom({
  key: "prOpenState",
  default: false,
});
