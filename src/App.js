import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementSaga, decrementSaga } from './actions'


const App = () => {

  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter)

  const onIncrement = () => {
    dispatch(increment())
  }

  const onDecrement = () => {
    dispatch(decrement())
  }

  const onIncrementSaga = () => {
    dispatch(incrementSaga())
  }

  const onDecrementSaga = () => {
    dispatch(decrementSaga())
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={onIncrement}>
        Inc
      </button>
      <button onClick={onDecrement}>
        Dec
      </button>
      <button onClick={onIncrementSaga}>
        Saga Inc
      </button>
      <button onClick={onDecrementSaga}>
        Saga Dec
      </button>
    </>
  );
}

export default App
