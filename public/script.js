const firstValue = document.getElementById('input1');

const secondValue = document.getElementById('input2');

const submit = document.getElementById("submit");

const result = document.getElementById("result");

function getcheckedRadio() {
  var checkedRadio = document.getElementsByName("operation");
  for (i = 0; i < checkedRadio.length; i++) {
    if (checkedRadio[i].checked)
      return checkedRadio[i].value;
  }
}

function calculator(operation) {
  let result;
  if (operation == "cong") {
    result = Number(firstValue.value) + Number(secondValue.value);
  } else if (operation == "tru") {
    result = Number(firstValue.value) - Number(secondValue.value);
  } else if (operation == "nhan") {
    result = Number(firstValue.value) * Number(secondValue.value);
  } else if (operation == "chia") {
    result = Number(firstValue.value) / Number(secondValue.value);
  }
  return result;
}
firstValue.addEventListener('change', function() {
  if (isNaN(firstValue.value)) {
    document.getElementById("alert").innerText = "Giá trị thứ nhất  không phải là số "
    result.value = "";
  }
})
secondValue.addEventListener('change', function() {
  if (isNaN(secondValue.value)) {
    document.getElementById("alert").innerText = "Giá trị thứ hai không phải là số "
    result.value = "";
  }
})
submit.addEventListener("click", function() {

  const operator = getcheckedRadio();
  const resultValue = calculator(operator);
  console.log(typeof(firstValue.value));
  if (operator === undefined) {
    console.log("Chưa chọn phép tính");
    document.getElementById("alert").innerText = "Chưa chọn phép tính"
  } else if (isNaN(firstValue.value)) {
    document.getElementById("alert").innerText = "Giá trị thứ nhất  không phải là số "
    result.value = "";
  } else if (isNaN(secondValue.value)) {
    document.getElementById("alert").innerText = "Giá trị thứ hai không phải là số "
    result.value = "";
  } else if (firstValue.value == "" || secondValue.value == "") {
    document.getElementById("alert").innerText = "Giá trị thứ nhất hoặc giá trị thứ 2 chưa được nhập"
    result.value = "";
  } else {
    document.getElementById("alert").innerText = ""
    result.value = resultValue;
  }

})