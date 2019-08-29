function calc() {
    var a = parseInt(document.querySelector("#value1").value); //why not use document.getElementbyId
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;   // we are declaring calculate now so it can be easily ammended in the function later

    if (op == "add")
    {
      calculate = a + b;
    } else if (op == "min")
    {
      calculate = a - b;
    } else if (op == "div")
    {
      calculate = a / b;
    } else if (op == "mul")
    {
      calculate = a * b;
    }

    console.log(calculate);
    document.querySelector("#result").innerHTML = calculate;
}