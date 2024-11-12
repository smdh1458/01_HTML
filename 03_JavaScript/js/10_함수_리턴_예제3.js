function 음식주문(xyz) {
  const price = 가격표(xyz);
  const result = document.getElementById("result");
  if (price > 0) {
    result.innerText =
      xyz + " 주문이 완료되었습니다. 가격은 " + price + " 입니다.";
  } else {
    result.innerText = "재료 소진된 메뉴로 주문이 불가능합니다.";
  }
}

function 가격표(xyz) {
  if (xyz === "비빔밥") {
    return 8000;
  } else if (xyz === "김치찌개") {
    return 7000;
  } else if (xyz === "된장찌개") {
    return 7000;
  } else {
    return 0; //위 if else 에서 0이하는 모두 재료 소진된 메뉴로 주문불가에 보내기
  }
}
