export class makeObject {
  // * logic : id와 password를 매개변수를 받아서 객체를 생성합니다.
  // * logic : set을 사용하여 id에는 문자열만을 받도록 하였습니다.
  constructor (id,password) {
    this.id = id;
    this.password = password;
  }
  
  set id(value) {
    if(typeof(value)==="string"){
      this._id = value;
    } else {
      console.error('이것은 문자열이 아닙니다.');
    }
  }
}