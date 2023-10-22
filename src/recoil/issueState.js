import { atom, atomFamily } from "recoil";

export const selectedState = atomFamily({
  key: "selectedState",
  default: ""
});

export const issueSelectedState = atomFamily({
  key: "issueSelectedState",
  default: [],
});

export const clickState = atom({
  key: "clickState",
  default: false,
});
