function appendValue(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
function clearLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
function calculate() {
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch (err) {
    display.value = "Error";
  }
}
