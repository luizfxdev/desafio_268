// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Referências aos elementos do DOM
  const corvinalInput = document.getElementById('corvinal');
  const grifinoriaInput = document.getElementById('grifinoria');
  const lufaLufaInput = document.getElementById('lufaLufa');
  const sonserinaInput = document.getElementById('sonserina');
  const revealBtn = document.getElementById('revealBtn');
  const backBtn = document.getElementById('backBtn');
  const resultDiv = document.getElementById('result');
  const calculationDiv = document.getElementById('calculation');

  // Função para revelar o resultado
  revealBtn.addEventListener('click', function () {
    // Obter os valores dos inputs
    const corvinalPower = parseInt(corvinalInput.value) || 0;
    const grifinoriaPower = parseInt(grifinoriaInput.value) || 0;
    const lufaLufaPower = parseInt(lufaLufaInput.value) || 0;
    const sonserinaPower = parseInt(sonserinaInput.value) || 0;

    // Calcular o resultado
    const result = calculateWinner(corvinalPower, grifinoriaPower, lufaLufaPower, sonserinaPower);

    // Exibir o resultado
    resultDiv.textContent = result.winner;

    // Exibir o cálculo
    calculationDiv.textContent = result.calculation;
  });

  // Função para limpar os campos (botão voltar)
  backBtn.addEventListener('click', function () {
    corvinalInput.value = '';
    grifinoriaInput.value = '';
    lufaLufaInput.value = '';
    sonserinaInput.value = '';
    resultDiv.textContent = '';
    calculationDiv.textContent = '';
  });

  // Função para calcular o vencedor
  function calculateWinner(corvinal, grifinoria, lufaLufa, sonserina) {
    const houses = [
      { name: 'Corvinal', power: corvinal },
      { name: 'Grifinória', power: grifinoria },
      { name: 'Lufa-Lufa', power: lufaLufa },
      { name: 'Sonserina', power: sonserina }
    ];

    // Encontrar o poder máximo
    const maxPower = Math.max(corvinal, grifinoria, lufaLufa, sonserina);

    // Verificar quais casas têm o poder máximo
    const winners = houses.filter(house => house.power === maxPower);

    // Preparar texto de cálculo
    let calculationText = 'Cálculo:\n';
    calculationText += `Corvinal: ${corvinal}\n`;
    calculationText += `Grifinória: ${grifinoria}\n`;
    calculationText += `Lufa-Lufa: ${lufaLufa}\n`;
    calculationText += `Sonserina: ${sonserina}\n\n`;
    calculationText += `Maior pontuação revelada: ${maxPower}\n\n`;

    if (winners.length === 1) {
      calculationText += `A casa ${winners[0].name} tem a maior pontuação.`;
      return {
        winner: `${winners[0].name} venceu!`,
        calculation: calculationText
      };
    } else {
      const winnerNames = winners.map(house => house.name).join(', ');
      calculationText += `As casas ${winnerNames} têm a mesma pontuação.`;
      return {
        winner: 'Empate entre as casas!',
        calculation: calculationText
      };
    }
  }
});
