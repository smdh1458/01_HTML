function check1() {
  let val; //undefined = 값없음 상태
  //처음부터 변수명에 특정 값을 담아두지 않고
  //나중에 값을 담기 위해 변수명만 선언

  //while문을 이용해서 취소를 누르기 전까지 반복
  // == 취소를 누르면 반복하지 않겠다 설정
  // prompt 버튼 확인 = 빈 값이 초기에 들어있음
  //             취소 = null값이 버튼 안에 들어있음
  while (val !== null) {
    /*
        동일 비교 연산자
        !== -> 값과 자료형이 모두 다를 경우 true
        === -> 값과 자료형이 모두 같을 경우 true
        */
    //입력한 값이 있는지 확인
    val = prompt("입력 후 확인하기"); // 변수에 prompt 값을 대입
    // 확인 ---> 입력한 값
    // 취소 ---> null

    alert(val + " 값을 확인 했습니다.");
  }
}

function check2() {
  let age; // 들어있는 나이 숫자 X

  while (age !== null) {
    age = prompt("나이를 입력하세요.");

    if (age >= 18) {
      alert("성인입니다.");
    } else if (13 <= age && 18 > age) {
      alert("청소년입니다.");
    } else {
      alert("어린이 입니다.");
    }
  }
}

function check3() {
  let gender;
  while (gender !== null) {
    gender = prompt("성별을 입력하세요"); /*

    alert("성별이 " + gender + "인것이 확인되었습니다.");*/
    if (gender === "여자") {
      alert("여자이군요!");
    } else if (gender === "남자") {
      alert("남자이군요!");
    } else {
      alert("잘못 입력했습니다. 다시 입력해주세요.");
    }
  }
}
