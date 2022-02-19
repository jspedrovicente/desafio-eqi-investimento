function getFormData() {
    const formInputs = document.querySelectorAll('.form-input');
    const formData = {};
    formInputs.forEach(formInput => {
        const value = formInput.value;
        const name = formInput.name;
        formData[name] = value;
    })
    return formData;
}

function generateSimulation(options) {
    axios.get('http://localhost:3000/simulacoes', {
    params: {
        'tipo-rendimento': 'bruto',
        'indexacao': 'pre',
        'aporte-inicial': 2514,
        'aporte-mensal': 51457,
        'prazo': 48,
        'rentabilidade': 29
    }
  })
  .then(function (response) {
    const data = response.data;
    const formData = getFormData();
    let correctResult;

    data.forEach(entry => {
        if(entry.tipoIndexacao == formData.indexacao && entry.tipoRendimento == formData.rendimento){
            correctResult = entry;
            
        }
    })
    displayResults(correctResult);

  }); 
  }

function displayResults(correctResult) {
   const valorFinalBruto = document.querySelector('.valor-final-bruto-result');
   const aliquotaIrResult = document.querySelector('.aliquota-ir-result');
   const valorPagoIrResult = document.querySelector('.valor-pago-ir-result');
   const valorFinalLiquidoResult = document.querySelector('.valor-final-liquido-result');
   const valorTotalInvestidoResult = document.querySelector('.valor-total-investido-result');
   const ganhoLiquidoResult = document.querySelector('.ganho-liquido-result');
   const rightContainer = document.querySelector('.right-side-container');
   
   valorFinalBruto.innerHTML = 'R$' + correctResult.valorFinalBruto;
   aliquotaIrResult.innerHTML = correctResult.aliquotaIR + '%';
   valorPagoIrResult.innerHTML = 'R$' + correctResult.valorPagoIR;
   valorFinalLiquidoResult.innerHTML = 'R$' + correctResult.valorFinalLiquido;
   valorTotalInvestidoResult.innerHTML = 'R$' +  correctResult.valorTotalInvestido;
   ganhoLiquidoResult.innerHTML = 'R$' +  correctResult.ganhoLiquido;
   rightContainer.classList.add('visible');
}