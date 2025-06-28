const exactDivArray = [];
var exactSum = 0;
var valueBalance = 100;

function exactDivList() {
  for (let i = 0; i < 100; i++) {
    if (i % 7 == 0 && i % 3 == 0) {
      exactDivArray.push(i);
      exactSum = exactSum + i;
      //console.log("%:", i);
    }
  }

  showExactList();
}
function showExactList() {
  const exactDivList = document.getElementById("exactDivList");
  exactDivList.innerHTML = "";

  const div = document.createElement("div");
  for (let i = 0; i < exactDivArray.length; i++) {
    console.log("%:", exactDivArray[i]);

    div.textContent = div.textContent + exactDivArray[i] + " , ";
  }

  div.textContent = div.textContent + "Exact division SUM : " + exactSum;
  exactDivList.appendChild(div);
}

//document.getElementById("output").innerHTML = checkLogin();
function checkLogin() {
  const formInput = document.getElementById("formInput");
  formInput.innerHTML = "";

  const inputName = document.getElementById("userName");
  const valueName = inputName.value.trim();

  const inputPassword = document.getElementById("passWord");
  const valuePassword = inputPassword.value.trim();
  let promptText = "";
  console.log("name: password: ", valueName, valuePassword);
  //alert(valueName + " : " + valuePassword);
  //formLogin.innerHTML = "";
  if (valueName === "admin" && valuePassword === "123456") {
    console.log("name---password: ", valueName, valuePassword);
    //alert("su");
    promptText = "Log in Sucessful";
    formATM.classList.remove("hidden");
  } else promptText = "Please input again  ";

  const div = document.createElement("div");
  div.className = "promptBox";
  div.textContent = "Hint: " + promptText;
  console.log(div.textContent);
  formInput.appendChild(div);

  formATM.classList.remove("hidden");
}

function showBalance() {
  const showBalance = document.getElementById("showBalance");
  showBalance.innerHTML = "";
  const div = document.createElement("div");
  div.className = "promptBox";
  div.textContent = "Balance: " + valueBalance;
  console.log(div.textContent);
  showBalance.appendChild(div);
}
function depositCount() {
  const depositCount = document.getElementById("depositCount");
  let valueDeposit = 0;
  valueDeposit = parseFloat(depositCount.value);
  console.log(
    "valueBalance -- valueDeposit : ",
    valueBalance + " -- " + valueDeposit
  );
  if (valueDeposit > 0) {
    valueBalance = valueBalance + valueDeposit;
    console.log("valueBalance", valueBalance);
    showBalance();
  }
}
function withdrawCount() {
  const withdrawCount = document.getElementById("withdrawCount");
  let valueWithdraw = 0;
  valueWithdraw = parseFloat(withdrawCount.value);
  if (valueWithdraw > 0 && valueWithdraw <= valueBalance) {
    valueBalance = valueBalance - valueWithdraw;
  } else {
    const showBalance = document.getElementById("showBalance");
    showBalance.innerHTML = "";
    const div = document.createElement("div");
    div.className = "promptBox";
    div.textContent = "withdraw must less than: $" + valueBalance;
    console.log(div.textContent);
    showBalance.appendChild(div);

    return;
  }

  showBalance();
}
