document.querySelector("#process").addEventListener("click", function(){
    data = document.querySelectorAll(".numbers:checked")
    largest = 0;
    for (i of data) {
        if (Number(i.value) > largest) {
            largest = Number(i.value)
        }
    }
    console.log(largest)
})