import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// state about modal
export const modalState = atomFamily({
  key: "modalState",
  default: false,
});

// state about active step
export const activeState = atom({
  key: "activeState",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

// state for checking step completion
export const eachStepState = atomFamily({
  key: "eachStepState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
