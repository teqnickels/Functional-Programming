function countIf(head, p) {
  var count = 0
  if(head === null) {
   return count
  }
  var current = head
  while(current.next !== null) {
    if(p(current.data)){
      count++
    }
    current = current.next
  } if(current.next === null) {
      if(p(current.data)){
      count++
    }
  }
  return count

}
