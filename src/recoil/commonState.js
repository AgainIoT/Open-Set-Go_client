import { atom, atomFamily } from "recoil";

// state about modal
export const modalState = atomFamily({
  key: "modalState",
  default: false,
});

// state about active step
export const activeState = atom({ key: "activeState", default: 1 });

// state for checking step completion
export const eachStepState = atomFamily({
  key: "eachStepState",
  default: false,
});
