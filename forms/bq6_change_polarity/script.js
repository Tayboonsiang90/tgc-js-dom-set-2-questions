document.querySelector("#process").addEventListener("click", function() {
    numbers = document.querySelectorAll(".numbers:checked")
    operation = document.querySelector(".operation:checked")
    if (operation.value == "plus") {
        sum = 0
        for (i of numbers) {
            sum += Number(i.value)
        }
        console.log(sum)
    } else {
        product = 1
        for (i of numbers) {
            product = product * Number(i.value)
        }
        console.log(product)
    }
})