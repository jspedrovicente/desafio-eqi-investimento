const radioButtons = document.querySelectorAll('.radio-button');

radioButtons.forEach(radioButton => {
    configureRadioButtonEvents(radioButton);
})

function configureRadioButtonEvents(radioButton) {
    radioButton.addEventListener('click', event => {
        const target = event.target;
        const radioGroup = target.parentNode;
        const radioId = target.id;
        const inputTag = radioGroup.querySelector('input');
        const buttonValue = target.getAttribute('value');

        // Atualizar classes de seleção
        clearRadioGroup(radioGroup);

        // Adicionar classe de seleção
        target.classList.add('selected');

        // Preenchendo o valor do Input
        inputTag.value = buttonValue;
    });
}

function clearRadioGroup(radioGroup) {
    const allRadioButtons = radioGroup.querySelectorAll('.radio-button');
    allRadioButtons.forEach(radioButton => {
        radioButton.classList.remove('selected');
    })
}