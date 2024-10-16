document.getElementById('jurosForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Pegando os valores inseridos no formulário
    let valor = parseFloat(document.getElementById('valor').value);
    let juros = parseFloat(document.getElementById('juros').value) / 100;
    let meses = parseInt(document.getElementById('meses').value);

    // Cálculo dos juros compostos
    let montante = valor * Math.pow((1 + juros), meses);
    let jurosTotal = montante - valor;

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = `O total de juros será R$ ${jurosTotal.toFixed(2)} e o valor total a pagar será R$ ${montante.toFixed(2)}.`;
});