document.querySelector("#process").addEventListener("click", function() {
    num1 = Number(document.querySelector("#num1").value)
    num2 = Number(document.querySelector("#num2").value)
    num3 = Number(document.querySelector("#num3").value)
    if (num1 >= num2 & num1 >= num3) {
        console.log(num1)
    } else if (num2 >= num3) {
        console.log(num2)
    } else {console.log(num3)}
})