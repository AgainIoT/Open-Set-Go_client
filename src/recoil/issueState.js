import { atom, atomFamily } from "recoil";

export const selectedTitle = atom({
  key: "selectedTitle",
  default: " ",
});

export const selectedType = atom({
  key: "selectedType",
  default: "",
});

export const bodyState = atom({
  key: "bodyState",
  default: "",
});

export const typeState = atomFamily({
  key: "typeState",
  default: false,
});
export const issueSelectedState = atomFamily({
  key: "issueSelectedState",
  default: [],
});

export const typesLst = atom({
  key: "typesLst",
  default: [],
});
