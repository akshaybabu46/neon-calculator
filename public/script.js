let display = document.getElementById("display");
let current = "";

function appendValue(val) {
  if (current.length < 15) {
    current += val;
    display.innerText = current;
  }
}

function clearDisplay() {
  current = "";
  display.innerText = "0";
}

function deleteLast() {
  current = current.slice(0, -1);
  display.innerText = current || "0";
}

function calculate() {
  try {
    const result = eval(current);
    display.innerText = result;
    current = result.toString();
  } catch {
    display.innerText = "Error";
    current = "";
  }
}
