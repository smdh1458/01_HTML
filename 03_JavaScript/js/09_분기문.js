/*break 확인*/

function check1() {
  //1부터 10까지 1씩 증가하다가
  //5가 되면 멈춤

  // 1. for 문을 이용해서
  // 1부터 5까지의 합을 출력
  let sum = 0;
  //      초기식 ; 조건식 ; 증감식
  /*for (let i = 1; i <= 10; i++) {
    if (i == 6) {
      alert(sum);//sum에는 1부터 5까지 더한 숫자값만 표기
      break; //i가 5가되면 행동을 멈춤
      //break는 for문을 조건식에서 모든 숫자의 행동을 진행하다가
      //특정 숫자나 값이 보이면 for문을 모두 중단
      //for문에서 중단하기 전의 값을 저장한 상태로 탈출
    } else {
      sum += i;
    }
  }*/

  for (let a = 1; a <= 10; a++) {
    sum += a;
    if (a == 5) {
      break;
    }
  }
  alert(sum);
}

function check2() {
  let result = 0;
  //1~20
  //첫번째 숫자 + 마지막숫자 = 21
  //20 / 2(절반) = 10;
  //21 * 10= 210
  //1 ~ 10 = 11     10/2=5  11*5=55
  for (let i = 1; i <= 20; i++) {
    result += i;
    if (i == 15) {
      break; //for문을 멈추고 여태 더한 숫자 결과 들고 for문 탈출
    }
  }
  alert("총 더한 값은 [" + result + "] 입니다.");
}

function check3() {
  let result = 0;
  for (let i = 1; i <= 20; i++) {
    console.log("i값 :" + i);
    if (i % 3 == 0) {
      break;
    }
    console.log("i 값 [" + i + "]");
  }
}
