import { all, call, spawn } from 'redux-saga/effects'
import { startRaspberry } from 'sagas/query'
const makeRestartable = saga => {
  return function*() {
    yield spawn(function*() {
      while (true) {
        try {
          yield call(saga)
          console.error(
            'unexpected root saga termination. The root sagas are supposed to be sagas that live during the whole app lifetime!',
            saga,
          )
        } catch (e) {
          console.error('Saga error, the saga will be restarted', e)
        }
        yield delay(1000) // Avoid infinite failures blocking app TODO use backoff retry policy...
      }
    })
  }
}

const rootSagas = [
  startRaspberry,
].map(makeRestartable)

export default function* root() {
  yield all(rootSagas.map(saga => call(saga)))
}
