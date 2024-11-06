// 초기값 설정하는 count 세팅
let count = 0; // const 값 변경이 안되기 때문에 사용 X
const bod = document.getElementById("bd");

function 증가() {
  count += 1;
  document.getElementById("count").innerText = count;

  bod.style.backgroundColor = count % 2 == 0 ? "#f0f0f0" : "#ffd1dc";
}

function 감소() {
  const cnt = document.getElementById("count");
  count -= 1;
  cnt.innerText = count;
  cnt.style.color = count % 2 == 0 ? "orange" : "black";
}

function 초기화() {
  count = 0; //감소와 증가 버튼 모두 count를 0으로 만들기
  document.getElementById("count").innerText = count;
  //document.getElementById("count").innerText = 0; = 눈속임
}
