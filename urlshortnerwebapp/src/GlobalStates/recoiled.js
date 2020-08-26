import { atom } from "recoil";

export const loggedinEmailState = atom({
  key: "loggedinEmailState", //key should be unique
  default: ""
});


export const loggedinUserid = atom({
  key: "loggedinUserid", //key should be unique
  default: ""
});

export const jwtState = atom({
  key: "jwtState", //key should be unique
  default: ""
});