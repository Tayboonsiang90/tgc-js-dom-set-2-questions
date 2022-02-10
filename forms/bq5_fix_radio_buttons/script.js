document.querySelector("#process").addEventListener("click", function() {
    try{
    checked = document.querySelector(".radio:checked")
    console.log(checked.value)
} catch (error) {
    console.log(0)
}
})