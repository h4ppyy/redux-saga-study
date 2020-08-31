import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* sagaInc(action) {
  yield call(() => { console.log('sagaInc') })
  yield delay(1000)
  yield put({ type: "INCREMENT" })
}

function* sagaDec(action) {
  yield call(() => { console.log('sagaDec') })
  yield delay(1000)
  yield put({ type: "DECREMENT" })
}

export function* mySaga() {
  yield takeEvery("SAGA_INCREMENT", sagaInc)
  yield takeEvery("SAGA_DECREMENT", sagaDec)
}