export const increment = () => {
  return { type: "INCREMENT" }
}

export const decrement = () => {
  return { type: "DECREMENT" }
}

export const incrementSaga = () => {
  return { type: "SAGA_INCREMENT" }
}

export const decrementSaga = () => {
  return { type: "SAGA_DECREMENT" }
}