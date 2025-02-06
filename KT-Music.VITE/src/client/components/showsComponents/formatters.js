// import React from "react"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(isSameOrAfter);

let state = ``;
let url = null;

// State Formatter
export function stateCheck(stateZIP) {
  let stateArr = stateZIP.split(" ");
  state = `${stateArr[0]}${stateArr[1]}`;
  return state;
}

// Address Formatter
export function addressCheck(address) {
  let commas = address.split(",");
  if (commas.length > 4) {
    commas.shift();
    let street = `${commas[0]},`;
    let city = `${commas[1]},`;
    let stateZIP = `${commas[2]}`;
    stateCheck(stateZIP);
    let location = `${street} ${city} ${state}`;
    return location;
  } else {
    let street = `${commas[0]},`;
    let city = `${commas[1]},`;
    let stateZIP = `${commas[2]}`;
    stateCheck(stateZIP);
    let location = `${street} ${city} ${state}`;
    return location;
  }
}

// URL Formatter
export function eventLinkFormatter(string) {
  if (string !== undefined) {
    let ogLink = string.split('"');
    url = ogLink[1];
  } else {
    url = null;
  }
  return url;
}
