function map(head, f) {
 if (head === null) {return}
  return new Node(f(head.data), map(head.next, f))
}

function filter(head, p) {
  if(head === null){
    return null
  }

  var current = head

  if(p(current.data)){
    return new Node(current.data, filter(current.next, p))
  }
}

function filter(head, p){
  if(head === null){
    return null
  }

  var current = head
  var list

  while (current.next !== null){
   if (p(current.data)) {
      return new Node(current.data, filter(current.next, p))
    } else {
      current = current.next
    }
  }

}
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
}
