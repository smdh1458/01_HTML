/*어린이 청소년 성인 판별 */
function check4() {
  //입력한 나이값 가져오기
  const age = document.getElementById("inputAge").value;
  //0세부터 13세 사이
  // 0세이상     입력한 나이가 13세 이하
  if (age >= 0 && age <= 13) {
    alert("어린이 입니다.");
  } else if (age >= 19 && age <= 120) {
    //19세부터 120세까지 성인
    alert("성인 입니다.");
  } else if (age >= 14 && age <= 18) {
    //14세부터 18세까지
    alert("청소년 입니다.");
  } else {
    //-1세 이하와 121세 이상부터는
    alert("잘못 입력했습니다.");
  }
}
