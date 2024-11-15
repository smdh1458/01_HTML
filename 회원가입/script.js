function 진행() {
  const mainCheck = document.getElementsByName("mainCheck");

  if (mainCheck[0].checked && mainCheck[1].checked && mainCheck[2].checked) {
    window.location.href = "회원가입.html";
  } else {
    alert("모든 필수 약관에 동의해야 합니다.");
  }
}

//1. 가입버튼 가입이 완료되었다는 alert이후 성공.html 이동하기
//2. addEventListener로 변경해서 작성(할수있다면)
function 가입() {
  const idRegExp = /^[a-zA-Z0-9]{5,12}$/;
  const pwRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  /*
      특정 문자를 포함했는가?
      (?=.*[A-Za-z]) = 대소문자 영어가 있는지 탐색
      (?=.*\d) = (?=.*[0-9]) = 숫자가 포함되어 있는가
      영어 대소문자나 숫자가 모두 하나이상 포함이 되어있어야 하는 비밀번호
  
    */
  const eRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const userId = document.getElementById("user-id").value;
  const userPw = document.getElementById("user-pw").value;
  const userEmail = document.getElementById("user-email").value;

  if (!idRegExp.test(userId)) {
    alert("아이디는 5~12자의 영문자 및 숫자이어야 합니다.");
    return false;
  }

  if (!pwRegExp.test(userPw)) {
    alert("비밀번호는 최소 8자이며, 문자와 숫자를 포함해야합니다.");
    return false;
  }

  if (!eRegExp.test(userEmail)) {
    alert("유효한 이메일 주소를 입력하세요.");
    return false;
  }
  alert("회원가입이 완료되었습니다.");
}
