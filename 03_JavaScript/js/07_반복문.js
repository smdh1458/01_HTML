function check1() {
  //onclick = function
  /*
    for([1]초기식; [2]조건식; [4]증감식) {
        [3] 조건식이 true일 경우 반복 수행할 코드

    }
    
    */
  //for(  ) 안에서 공간을 구부짓는 기준은 ;
  /*
   for(최초 1회만 어떤 값인지 보여지는 공간; 
    {} 안에 들어가서 작성되어 있는 코드를 실행할 수 있는 권한의 조건;
    더하거나 뺄 값++ --) {
        조건이 true 일때 실행할 공간
    }
     */
  // for 문 안에는 const(상수) 대신 let(변수)를 사용함

  // 문자열 형식으로 모든 숫자 출력해서 숫자들이 모두 나왔는지 확인해보기

  let 결과 = ""; //빈 문자 제공
  //숫자를 1부터 5까지 출력

  /*
  숫자++  ===> 숫자 = 숫자+1;
  */
  for (let 숫자 = 1; 숫자 <= 5; 숫자++) {
    // 결과라는 변수명에 숫자를 1부터 5까지 누적해서 이어 붙이기를 원함
    결과 += 숫자;
    // 결과 = 결과 + 숫자;
    console.log("결과 : " + 결과);
  }

  console.log("==================");
  console.log("최종으로 출력되는 결과 값은");
  console.log(결과 + "입니다.");
}

/* 1부터 10까지 연속 출력 하는 숫자들 표기 */
function check2() {
  for (let a = 1; a <= 10; a++) {
    console.log("1 ~ 10: " + a);
  }
}

function check3() {
  for (let b = 1; b <= 20; b++) {
    console.log("1 ~ 20: " + b);
    //누적이 안된 상태에서 새롭게 b로 다시 출력
    // 왜? 결과로 += 써서 이어작성하기를 안했기 때문!
  }
}

function check4() {
  let sum = "";
  for (let c = 5; c <= 15; c++) {
    console.log("5 ~ 15: " + c); // b의 값이 바뀔 때마다 15까지 c가 모두 바뀌어서 출력
    sum += c; //c=5 sum = 5, c=6  sum=56....
  }
  //c는 for안에서 작성한 변수명이기 때문에 {}를 나오고 나서는 사용 X
  // 나올수 없는 c 대신 전역변수인 sum에 c의 모든 값을
  // 담고 sum으로 c의 모든 값을 출력
  alert(sum);
}

/*
while문 기본 구조
while (조건) {
  //반복할 코드
}

*/

// while1 기능의 버튼을 누르면 1부터 5까지 숫자를 더한 값을 출력
function while1() {
  let num = 1; //let 변할 수 있는 변수명을 작성 const 변할수 없는 상수명 작성

  while (num <= 5) {
    alert("num의 숫자값은 " + num + "입니다.");
    //계속 num의 값이 1이기 때문에 무한 반복
    // num숫자를 1씩 증가시켜서 숫자가 5가 되면 while문 종료하기
    num++; //num=num+1;
  }
}

function while2() {
  let abc = 1;
  let sum = 0;
  while (abc <= 10) {
    sum += abc;
    console.log("abc의 값: " + abc);
    console.log("합계: " + sum);
    abc++;
  }
}

function while3() {
  let abc = 1;
  let sum = 0;
  while (abc <= 10) {
    sum += abc;
    console.log("abc의 값: " + abc);
    console.log("합계: " + sum);
    if (abc == 5) {
      break;
    }
    abc++;
  }
}

//while4 라는 지역변수 안에서만 사용하는 변수명을 설정할 경우에는
//{}안에 변수명을 작성
function while4() {
  let xyz = 0;
  while (xyz <= 20) {
    xyz++;
    console.log(xyz);
  }
}

function while5() {
  let i = 5;
  while (i <= 20) {
    console.log("숫자는" + i + "입니다.");
    i++;
    if (i == 16) {
      break;
    }
  }
}
