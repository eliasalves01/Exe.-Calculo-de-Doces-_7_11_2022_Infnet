let qtddoces = Number(prompt('Qual a quantidade de doces?'));
let caixa = Number(prompt('Qual a quantidade da caixa?'));

if (Number.isInteger(qtddoces) && Number.isInteger(caixa)) {
    let quatidadeCaixa = Math.trunc(qtddoces / caixa);
    let resto = qtddoces % quatidadeCaixa;

    if (resto == 0) {
        alert(`Será necessario você ter ${quatidadeCaixa} caixas completas`);
    } else {
        alert(
            `Será necessario você ter  ${quatidadeCaixa} caixas completas mais ${resto} para suprir sua necessidade`
        );
    }
} else {
    alert('ERRO: Valor Invalido');
}
