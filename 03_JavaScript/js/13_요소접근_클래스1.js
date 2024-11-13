//클래스 접근 테스트
function clsTest() {
  const divs = document.getElementsByClassName("cls");

  alert(divs); //유사배열(= HTMLCollection = html묶음들)
  // div = cls 중에서 0번째로 작성된 div요소 배경색 변경
  // div.length = 3;
  // for문에 변수명.length를 사용할 때는 <= 아니라 < 를 작성해야함
  // index는 무조건 0 부터 시작하기 때문에
  // let i = 0 에서 시작하는 것
  divs[0].style.backgroundColor = "yellowgreen";
  divs[1].style.backgroundColor = "yellow";
  divs[2].style.backgroundColor = "lightblue";

  for (let i = 0; i < divs.length; i++) {
    divs[i].innerText = `${i} 번째 div입니다.`;
  }
}
/*
    NodeList = 유사 배열 = 배열과 비슷하지만 배열은 아님
    배열처럼 index, length는 가지고 있으니
    배열 전용 기능 (매서드)를 제공하지 않음

    index = [] 0번째부터 length-1번째까지 번호를 매기는 것
                자동으로 번호가 매겨짐

    length = [] 안에 값이 얼마나 들어있는지 1부터 갯수를 세는 것
    */

function clsSpn() {
  const spn1 = document.getElementsByClassName("spn");
  //className 으로 작성된 spn 모두 가져올 것

  spn1[0].style.backgroundColor = "red";
  spn1[1].style.backgroundColor = "orange";
  spn1[2].style.backgroundColor = "yellow";
  spn1[3].style.backgroundColor = "green";
  spn1[4].style.backgroundColor = "blue";
}
