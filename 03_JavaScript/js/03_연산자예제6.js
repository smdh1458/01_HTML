function checkPw() {
  const pw = document.getElementById("inputPw").value;
  const pwConfirm = document.getElementById("inputPwConfirm").value;
  //pw == pwConfirm ? alert("일치합니다.") : alert("일치하지 않습니다.");

  const success = "비밀번호가 일치합니다.";
  const fail = "비밀번호가 일치하지 않습니다.";
  //좌우 값이 일치하는지 확인만 하면 되기 때문에 좌우에 어떤 값이 무조건 와야한다는 규칙 없음!
  "pass1234!" == pw && "pass1234!" == pwConfirm ? alert(success) : alert(fail);
}
