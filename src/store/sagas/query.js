import { START_RASPBERRY_AT } from "store/actionTypes";
import { delay } from "redux-saga";
import { JsonApiRequest } from "api";
import { put, takeLatest, select } from "redux-saga/effects";

function* _doStartRaspberry({ index }) {
  const cameras = yield select(state => state.app.get("cameras"));
  JsonApiRequest(`${cameras[index].apiAddr}/start`, {
    method: "POST",
    body: JSON.stringify(cameras[index]),
  });
}

export function* startRaspberry() {
  yield takeLatest(START_RASPBERRY_AT, _doStartRaspberry);
}
