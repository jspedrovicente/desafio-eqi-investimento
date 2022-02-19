// Configurar todos inputs que requer cifrão.
const currencyFormInputs = document.querySelectorAll('.form-input-currency');
const inputCurrencyMaskConfig = {
    mask: 'R$num',
    blocks: {
    num: {
        // nested masks are available!
        mask: Number,
        thousandsSeparator: '.'
    }
    }
}

// Configurar todos inputs que requer porcentagem.
const percentageFormInputs = document.querySelectorAll('.form-input-percentage');
const inputPercentageMaskConfig = {
    mask: 'num{%}', 
    blocks: {
    num: {
        // nested masks are available!
        mask: Number,
        thousandsSeparator: '.',
        min: 1,
        max: 100,
        normalizeZeros: true,
    }
    }
}

// Configurar todos inputs que requer números inteiros.
const monthFormInput = document.querySelector('.form-input-month');
const inputMonthMaskConfig = {
    mask: 'num', 
    blocks: {
        num: {
            // nested masks are available!
            mask: Number,
            min: 0,
            max: 120,
            scale: 0,
        }
    }
}



currencyFormInputs.forEach(currencyFormInput => {
    IMask(currencyFormInput, inputCurrencyMaskConfig)
})

percentageFormInputs.forEach(percentageFormInput => {
    IMask(percentageFormInput, inputPercentageMaskConfig)
})

IMask(monthFormInput, inputMonthMaskConfig);



let allInputs = document.querySelectorAll('.form-input');
allInputs.forEach(input => {
    input.addEventListener('keydown', event =>{
        setTimeout(() =>{
            const inputValue = input.value;
            const sanitizedValue = inputValue.replaceAll('R$', '').replaceAll('%', '');

        const formInputBox = input.parentNode;
        const errorMessage = formInputBox.querySelector('.error-message');
        if(sanitizedValue.length == 0){
            errorMessage.classList.add('visible');
        } else {
            errorMessage.classList.remove('visible');
        }
        });        
        
    })
})



