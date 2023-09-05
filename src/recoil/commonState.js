import { atom, atomFamily } from "recoil";

export const modalState = atomFamily({
  key: "modalState",
  default: false,
});

export const activeState = atom({ key: "activeState", default: 1 });
export const eachStepState = atomFamily({ key: "eachStepState", default: [] });
