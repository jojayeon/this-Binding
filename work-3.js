console.log("밑도 끝도 없는 this: ",this);

function workThree(a,b) {
  console.log("함수안에 this : ",this);
  return a+b;
}
console.log(workThree(1,2));

let itsMe = {
  name : "조자연",
  age : 26,
  home : "계룡",
  test : this,
  sentence : function() {
    return this.name + ", 앤디 크로스";
  }
}

console.dir("객체에서 보는 this : ",itsMe);
console.log("메서드로 보는 this : ",itsMe.sentence());





// this를 만난다 -> 검사해봐야 한다.