import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const selectedState = atomFamily({
  key: "selectedState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const issueSelectedState = atomFamily({
  key: "issueSelectedState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const clickState = atom({
  key: "clickState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
