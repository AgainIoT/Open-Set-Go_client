import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "authorize",
  storage: localStorage,
});

export const isLogin = atom({
  key: "isLogin",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const avatar = atom({
  key: "avatar",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
export const id = atom({
  key: "id",
  default: "guest",
  effects_UNSTABLE: [persistAtom],
});
export const name = atom({
  key: "name",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
