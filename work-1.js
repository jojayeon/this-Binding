function WorkOne(a,b) {
  if(typeof(a) === "number" || typeof(b) === "number"){
      let local = a + b;
      return local;    
  } else {
    console.error("매개변수 작성이 잘못됨")
  }
};
