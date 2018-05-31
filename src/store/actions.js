import {
  START_RASPBERRY_AT,
  ADD_ADDRESS_AT,
} from "store/actionTypes";

export function addAddressAt(payload = {}) {
  return {
    type: ADD_ADDRESS_AT,
    payload,
  };
}

export function startRaspberryAt(index) {
  return {
    type: START_RASPBERRY_AT,
    index,
  };
}
