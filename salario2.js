function calcularFolha() {
    // Obter os valores dos inputs
    const salario = parseFloat(document.getElementById('salario').value) || 0;
    const horasExtras = parseFloat(document.getElementById('horasExtras').value) || 0;
    const descontoINSS = parseFloat(document.getElementById('descontoINSS').value) || 0;
    const descontoIRRF = parseFloat(document.getElementById('descontoIRRF').value) || 0;
    const bonus = parseFloat(document.getElementById('bonus').value) || 0;
    const descontoPlanoSaude = parseFloat(document.getElementById('descontoPlanoSaude').value) || 0;
    const descontoValeTransporte = parseFloat(document.getElementById('descontoValeTransporte').value) || 0;
    const valeAlimentacao = parseFloat(document.getElementById('valeAlimentacao').value) || 0;
    const descontoFGTS = parseFloat(document.getElementById('descontoFGTS').value) || 0;
    const descontoOutros = parseFloat(document.getElementById('descontoOutros').value) || 0;

    // Cálculo do imposto com base na faixa salarial
    let percentualImposto = 0;
    if (salario > 5000) {
        percentualImposto = 17.5;
    } else if (salario > 4000) {
        percentualImposto = 12;
    } else if (salario > 3000) {
        percentualImposto = 7.5;
    } else if (salario > 1800) {
        percentualImposto = 3.5;
    } else {
        percentualImposto = 0;
    }

    // Calcular o valor do imposto
    const imposto = (salario * percentualImposto) / 100;

    // Cálculos totais
    const totalDescontos = descontoINSS + descontoIRRF + descontoPlanoSaude + descontoValeTransporte + descontoFGTS + descontoOutros + imposto;
    const totalRecebido = salario + horasExtras + bonus + valeAlimentacao - totalDescontos;

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = `
        O valor total da folha de pagamento é: R$ ${totalRecebido.toFixed(2)} <br>
        Imposto aplicado: ${percentualImposto}% (R$ ${imposto.toFixed(2)})
    `;
}
