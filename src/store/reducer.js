import { Map } from "immutable";
import { ADD_ADDRESS_AT } from "store/actionTypes";

const initialState = new Map().set("videos", [
  "DSCN0003.mp4",
  "DSCN0007.mp4",
  "DSCN0012.mp4",
  "DSCN0017.mp4",
  "DSCN0021.mp4",
  "DSCN0025.mp4",
  "DSCN0030.mp4",
  "DSCN0034.mp4",
  "DSCN0004.mp4",
  "DSCN0008.mp4",
  "DSCN0014.mp4",
  "DSCN0018.mp4",
  "DSCN0022.mp4",
  "DSCN0026.mp4",
  "DSCN0031.mp4",
  "DSCN0035.mp4",
  "DSCN0005.mp4",
  "DSCN0009.mp4",
  "DSCN0015.mp4",
  "DSCN0019.mp4",
  "DSCN0023.mp4",
  "DSCN0028.mp4",
  "DSCN0032.mp4",
  "DSCN0036.mp4",
  "DSCN0006.mp4",
  "DSCN0010.mp4",
  "DSCN0016.mp4",
  "DSCN0020.mp4",
  "DSCN0024.mp4",
  "DSCN0029.mp4",
  "DSCN0033.mp4",
  "OL - outside.mp4"
]
);

export default function app(state = initialState, action) {
  switch (action.type) {
    case ADD_ADDRESS_AT: {
      const addr = [...state.get("cameras")];
      addr[action.payload.index] = {
        ...addr[action.payload.index],
        ...action.payload.value,
      };
      return state.set("cameras", addr);
    }
    default: {
      return state;
    }
  }
}
