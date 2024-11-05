function calc() {
  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");
  const result = document.getElementById("res");

  const comp =
    n1.value > n2.value
      ? "첫 번째 숫자가 더 큽니다."
      : "두 번째 숫자가 더 크거나 같습니다.";

  const add = Number(n1.value) + Number(n2.value);
  const mul = n1.value * n2.value;
  const sub = n1.value - n2.value;

  result.innerText =
    comp +
    "\n" +
    "더하기결과: " +
    add +
    "\n" +
    "곱하기결과: " +
    mul +
    "\n" +
    "빼기결과: " +
    sub;
}
