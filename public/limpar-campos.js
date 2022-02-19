// Essa função limpa todos inputs não hidden
function clearInputs() { 
    const inputs = document.querySelectorAll('.clear-form-input');
    const rightContainer = document.querySelector('.right-side-container');
    inputs.forEach(input => {
        input.value = '';
    })
    rightContainer.classList.remove('visible');
}