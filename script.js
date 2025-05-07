function appendValue(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
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

function addToHistory(entry) {
  const historyList = document.getElementById("history");
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
}

// Default to light mode on load
document.body.classList.add("light");
