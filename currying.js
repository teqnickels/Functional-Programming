function multiplyAll(array){
  return function multiply_all(integer){
    return array.map(x => x * integer)
  }
}
