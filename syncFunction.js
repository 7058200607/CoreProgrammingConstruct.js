function f1(){
  console.log("it is my 1st function");
}

function f2(){
  console.log("it is my 2nd function");
  f1();
}

f2();