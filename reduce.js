function reduce (head, f, init){
      var accumulated = init
      var current = head
      if(current === null){return f(accumulated,head)}
      while(current.next !== null && current !== null) {
        accumulated = f(accumulated, current.data)
        current = current.next
      }
      if(current.next === null){
        accumulated = f(accumulated, current.data)
      }
      return accumulated
    }
