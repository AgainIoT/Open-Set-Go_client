import { atom, atomFamily } from "recoil";

export const selectedState = atomFamily({
  key: "selectedState",
  default: ""
});

export const bodyState = atom({
  key: "bodyState",
  default: "",
});

export const issueSelectedState = atomFamily({
  key: "issueSelectedState",
  default: [],
});

export const selectedInfo2 = atom({
  key: "selectedInfo2",
  default: [],
});
export const selectedInfo3 = atom({
  key: "selectedInfo3",
  default: [],
});

export const typesLst = atom({
  key: "typesLst",
  default: [],
});

export const clickState = atom({
  key: "clickState",
  default: false,
});
