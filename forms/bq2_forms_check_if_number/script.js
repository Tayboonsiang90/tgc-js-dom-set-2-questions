// write your code here

document.querySelector("#process").addEventListener("click", function() {
    num1 = document.querySelector("#num1").value
    num2 = document.querySelector("#num2").value
    num3 = document.querySelector("#num3").value

    if (!isNumber(num1) || !isNumber(num2) || !isNumber(num3)) {
        console.log("error")
    } else {
        console.log((Number(num1)+Number(num2)+Number(num3))/3)
    }
})

// --- LEAVE THE BELOW ALONE ----
function isNumber(x) {
    return !isNaN(x);
}

try {
   module.exports = exports = {isNumber};
} catch (e) {}