"use strict";
// var studentNames:string[]=["ali","ahmad","danish","jajja","hamid"]
// studentNames.splice(3,10,"jutt")
// console.log(studentNames);
// let todos:string[]=["learn ary","learn aray methods"];
// var updatetodos=todos.splice(1,0,"how are you")
// console.log(todos);
// write a program having arrays of todos if todos are in odd delete one from center of array otherwise remove two todos from center
var todoss = ["ali", "ahmad", "danish", "jajja", "hamid", "ham"];
if (todoss.length % 2 == 0) {
    todoss.splice(todoss.length / 2, 2);
}
else {
    todoss.splice(todoss.length / 2, 1);
}
console.log(todoss);
