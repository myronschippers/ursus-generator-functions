# Generator Functions

## function* myGenerator ()

Run...Stop...Run
 
ES6 has a new way to write functions -- they're called Generator Functions.

ES6 generators may be paused in the middle, one or many times, and resumed later, allowing other code to run during these paused periods. A generator function 'remembers' where it was, and variables inside it until it has finished.

Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.


They have a special keyword `yield` -
A generator function can `yield` many different things. As it is called, it will pause and exit the function when it reaches a `yield`. When called again, it will remember where it was last time you called it, and then continue until it gets to a new `yield`, a `return`, or the end of the code block!