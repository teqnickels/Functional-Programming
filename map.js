function map(head, f) {
 if (head === null) {return}
  return new Node(f(head.data), map(head.next, f))
}
