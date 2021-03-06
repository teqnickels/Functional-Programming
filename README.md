# Functional-Programming
##Square-Python

## Description

This goal provides an introduction to functional programming concepts using JavaScript and gives you the opportunity to practice these concepts with a series of reinforcement exercises from the [Mostly Adequate Guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/content/) and a handful of automated challenges on [CodeWars](https://www.codewars.com/kata/latest/my-languages?tags=Functional+Programming).

## Context

Functional programming patterns are becoming increasingly popular in the web development community. Using these patterns results in code that is more adaptable and flexible, less buggy, and more scalable. 

The article [The Two Pillars of JavaScript : Pt 2: Functional Programming
How to Stop Micromanaging Everything](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4#.p9gfmzfel) goes into many of the reasons why you might want to consider learning how to write JavaScript as a functional programmer would.

## Specifications

- [x] Read the [Mostly Adequate Guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/content/) through Chapter 8: Tupperware
- [ ] Complete the exercises in the Mostly Adequate Guide (note: there aren't exercises after each chapter - just the ones on Ch 4: Currying, Ch: 5: Coding by Composing, and Ch: 8 Tupperware).
- [x] Practice these concepts by completing at least [5 Functional Programming exercises](https://www.codewars.com/kata/latest/my-languages?tags=Functional+Programming) on 

-OR-

- [ ] Refactor a previous project to use functional programming patterns (strongly recommended to review the Mostly Adequate Guide before starting) 

CodeWars (just a heads up: you're required to answer a couple of super basic JS questions to sign up for CodeWars). BONUS: Do more if you get through 5 exercises by the end of the cycle.

 
### Required

- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

## Quality Rubric

- All exercises in the Mostly Awesome Guide are completed and pushed to GitHub: 25 pts
- At least 5 exercises on CodeWars are completed: 25 pts

## Resources

[So You Want to Be a Functional Programmer](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536)

[Eloquent JavaScript Chapter 6: Functional Programming](http://eloquentjavascript.net/1st_edition/chapter6.html)

[Ramda](http://ramdajs.com/docs/) - similar to lodash, but for functional programming

[Functors, Applicatives, And Monads In Pictures](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)

[Category Theory for Programmers (advanced)](https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/)

[Ramda REPL (read-evaluate-print-loop)](http://ramdajs.com/repl/)

[Professor Frisby Introduces Composable Functional JavaScript](https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript)

---

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT

______________________________________________________________________________________________________________________________
# Fun with Lists: Reduce

https://www.codewars.com/kata/fun-with-lists-reduce
______________________________________________________________________________________________________________________________
## Description:

Implement the method reduce, which accepts three arguments:

linked list (head)
bi-function - (accumulated_value, current_element_data)
initial value
This method should return the result of applying the given function on every element with the accumulating result, starting with the initial value.

For example:

Given the list: 1 -> 2 -> 3, the function (acc, curr) => acc + curr and an initial value of 0, reduce should return 6, because:

(0, 1) and the function (acc, curr) => acc + curr gives 1
(1, 2) and the function (acc, curr) => acc + curr gives 3
(3, 3) and the function (acc, curr) => acc + curr gives 6
Another example:

Given the list: 1 -> 2 -> 3 -> 4, the function (acc, curr) => acc * curr and an initial value of 1, reduce should return 24

## Solution:


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

______________________________________________________________________________________________________________________________
# Fun with Lists: Map
https://www.codewars.com/kata/fun-with-lists-map
______________________________________________________________________________________________________________________________

## Description:

Implement the method map, which accepts a linked list (head) and a mapping function, and returns a new linked list (head) where every element is the result of applying the given mapping method to each element of the original list.

Make sure you do not modify the original list!

For example: Given the list: 1 -> 2 -> 3, and the mapping function x => x * 2, map should return 2 -> 4 -> 6

# Solution:

    function map(head, f) {
     if (head === null) {return}
      return new Node(f(head.data), map(head.next, f))
    }

   ______________________________________________________________________________________________________________________________
# Fun with Lists: Filter
https://www.codewars.com/kata/fun-with-lists-filter
______________________________________________________________________________________________________________________________

## Description:

Implement the method filter, which accepts a linked list (head) and a predicate function, and returns a new linked list (head) which only contains the elements which apply to the given predicate.

For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, filter should return 2 -> 3, since x >= 2 applies to both 2 and 3.

## Solution
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
______________________________________________________________________________________________________________________________
# Fun with Lists: CountIf
https://www.codewars.com/kata/fun-with-lists-countif
______________________________________________________________________________________________________________________________

## Description:

Implement the method countIf (count_if in PHP), which accepts a linked list (head) and a predicate function, and returns the number of elements which apply to the given predicate.

For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, countIf / count_if should return 2, since x >= 2 applies to both 2 and 3.

## Solution

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
    
______________________________________________________________________________________________________________________________ 
# Currying functions: multiply all elements in an array
https://www.codewars.com/kata/586909e4c66d18dd1800009b
______________________________________________________________________________________________________________________________
## Description

To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.


## Solution

    function multiplyAll(array){
      return function multiply_all(integer){
        return array.map(x => x * integer)
      }
    }
