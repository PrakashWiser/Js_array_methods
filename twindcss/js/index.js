document.getElementById("calculateBtn").addEventListener("click", function () {
  const Amount = document.getElementById("Amount").value;
  const interestRate = document.getElementById("interestRate").value;
  const loanTenure = document.getElementById("loanTenure").value;
  const emi = calculateEMI(Amount, interestRate, loanTenure);
  document.getElementById("emiResult").innerText = `EMI: ₹${emi.toFixed(2)}`;
});
function calculateEMI(Amount, interestRate, loanTenure) {
  const monthlyInterestRate = interestRate / 12 / 100;
  const emi =
    (Amount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, loanTenure)) /
    (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);
    
  return emi;
}



function normalMode() {
    var a = document.getElementById("darkMode").innerHTML;
    if (a == "White Mode") {
      document.getElementById("darkMode").innerHTML = "Black Mode"
      document.getElementById("bgNormal").classList.add("normalmode")
    } else {
      document.getElementById("darkMode").innerHTML = "White Mode"
     var a = document.getElementById("bgNormal").classList.remove("normalmode")
     console.log(a);
    }
}