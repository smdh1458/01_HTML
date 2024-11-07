const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const msg = document.getElementById("msg");

function go() {
  const abc = 10; // const 새로 만들어준 이름을 아래에서 사용하지 않았기 때문에 글자가 흐리게 보이는 것
  // 글자를 선명하게 보기 위해서는 abc라는 새로 만들어진 변수명을 아래에서 사용해야함
  const inputMp = document.getElementById("inputMp").value;
  const inputTp = document.getElementById("inputTp").value;
  inputMp || inputTp
    ? (msg.style.display = "none")
    : (msg.style.display = "block");
}

function login() {
  const id = inputId.value;
  const pw = inputPw.value;
  "khtzzang" == id && "kht1004" == pw
    ? alert("로그인 성공!")
    : alert("로그인 실패..");
}
