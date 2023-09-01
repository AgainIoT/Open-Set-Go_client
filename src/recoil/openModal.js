import { atom, atomFamily } from "recoil";

export const gitignoreOpenState = atom({
  key: "gitignoreOpenState",
  default: false,
});

export const issueTemplateState = atom({
  key: "issueTemplateState",
  defalut: false,
});

export const modalState = atomFamily({
  key: "modalState",
  default: false,
});
