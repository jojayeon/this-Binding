console.log("밑도 끝도 없는 this: ",this);

function workThree(a,b) {
  console.log("함수안에 this",this);
  return a+b;
}