class WorkTwo {
  constructor(a,b) {
    this.a = a;
    this.b = b;
  }
  set a(value) {
    if(typeof(value) === "number"){
      return this._a = value;
    }else {
      throw new Error("a는 숫자만 입력 가능합니다.")//코드 멈춤
    }
  }
}


let test = new WorkTwo(1,2);
let test2 = new WorkTwo("w",2);
console.log(test);
console.log(test2);
