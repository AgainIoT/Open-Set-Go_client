import { atom, atomFamily } from "recoil";

export const modalState = atomFamily({
  key: "modalState",
  default: false,
});

export const activeState = atom({ key: "activeState", default: 0 });
export const eachStepState = atomFamily({ key: "eachStepState", default: [] });
