function calcIMC() {
    let heigthInputValue = document.getElementById('input-heigth')
    let weigthInputValue = document.getElementById('input-weigth')

    heigthInputValue.style.border = ''
    weigthInputValue.style.border = ''

    if (!heigthInputValue.value || !weigthInputValue.value) {
        heigthInputValue.style.border = '1px solid red'
        weigthInputValue.style.border = '1px solid red'
        alert('Informe ambos os valores para ser realizado o cálculo')
    } else {
        let calc = (weigthInputValue.value / (heigthInputValue.value * heigthInputValue.value)).toFixed(2)

        localStorage.setItem('lastIMC', calc)
        document.getElementById('result').value = calc
        const classificCheck = checkResult(calc)
        document.getElementById('textResult').textContent = ` ${classificCheck}`
    }
}

function showResults() {
    const lastResultIMC = localStorage.getItem('lastIMC')
    if (lastResultIMC) {
        document.getElementById('result').value = lastResultIMC
    } else {
        document.getElementById('result').value = '0'
    }
}

function checkResult(checkIMC) {
    if (checkIMC <= 18.5) {
        return "e está abaixo do peso ideal"
    } else if (checkIMC > 18.5 && checkIMC <= 24.9) {
        return "e está no intervalo de peso ideal"
    } else if (checkIMC >= 25 && checkIMC < 29.9) {
        return "e está em sobrepeso";
    } else if (checkIMC >= 30 && checkIMC < 34.9) {
        return "e está em obesidade grau 1";
    } else if (checkIMC >= 35 && checkIMC < 39.9) {
        return "e está em besidade grau 2";
    } else {
        return "e está em obesidade grau 3";
    }
}