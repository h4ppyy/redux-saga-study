import { all, fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* logging(action) {
  yield fork(() => { console.log('logging -> ', action) })
}

function* sagaInc() {
  yield delay(1000)
  yield put({ type: "INCREMENT" })
}

function* sagaDec() {
  yield delay(1000)
  yield put({ type: "DECREMENT" })
}

export function* mySaga() {
  yield takeEvery("SAGA_INCREMENT", sagaInc)
  yield takeLatest("SAGA_DECREMENT", sagaDec)
  yield takeEvery("*", logging)
}