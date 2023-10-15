import { atom, atomFamily, selector } from "recoil";

export const selectedTitle = atom({
  key: "selectedTitle",
  default: "",
});

export const bodyState = atom({
  key: "bodyState",
  default: "",
});

export const issueSelectedState = atomFamily({
  key: "issueSelectedState",
  default: [],
});
