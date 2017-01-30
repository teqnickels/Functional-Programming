function filter(head, p){
  if(head === null){
    return
  }
  var current = head
  while( current.next !== null){
    if(p(current.data))  {
      return new Node(current.data, filter(current.next, p))
    }
    current = current.next
  }
  if (current.next === null){
    if(p(current.data))  {
      return new Node(current.data, filter(current.next, p))
    }
  }
