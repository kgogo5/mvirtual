import { atom } from "recoil";

export const mobile = atom({
  key: "mobile",
  default: "",
});

export const language = atom({
  key: "language",
  default: "ko",
});
