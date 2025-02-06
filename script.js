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