btnSection = document.getElementById("button-section");
inputSection = document.getElementById("input-section");

const numbers = "1234567890"
let operationsArray = []

btnSection.addEventListener("click", function (event) {
    if (numbers.includes(event.target.innerText)){
        inputSection.value += event.target.innerText
    }

    if (event.target.innerText === "AC"){
        inputSection.value = ""
        operationsArray = []
    }

    if (event.target.innerText === "+/-"){
        inputSection.value = inputSection.value * -1
    }

    if (event.target.innerText === "%"){
        inputSection.value = inputSection.value / 100
    }

    if (event.target.innerText === "/"){
        operationsArray.push(inputSection.value)
        operationsArray.push("/")
        inputSection.value = ""
    }
    if (event.target.innerText === ","){
        inputSection.value += "."
    }

    if (event.target.innerText === "÷"){
        operationsArray.push(inputSection.value)
        operationsArray.push("÷")
        inputSection.value = ""
    }

    if (event.target.innerText === "x"){
        operationsArray.push(inputSection.value)
        operationsArray.push("*")
        inputSection.value = ""
    }

    if (event.target.innerText === "-"){
        operationsArray.push(inputSection.value)
        operationsArray.push("-")
        inputSection.value = ""
    }

    if (event.target.innerText === "+"){
        operationsArray.push(inputSection.value)
        operationsArray.push("+")
        inputSection.value = ""
    }

    if (event.target.innerText === "="){
        operationsArray.push(inputSection.value)
        inputSection.value = eval(operationsArray.join(" "))
    }
})
