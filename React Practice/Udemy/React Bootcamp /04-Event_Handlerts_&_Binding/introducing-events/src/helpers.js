function randomStuff(arr) {
  let indexNum = Math.floor(Math.random() * arr.length)
  return arr[indexNum]
}

export { randomStuff }