function solucao(precos) {
  //seu codigo aqui
  const totalDeCompras = precos.reduce((acumulador, elementoAtual) => {
    return acumulador + elementoAtual;
  });
  if (precos.length >= 3) {
    const precosCrescente = precos.sort((a, b) => {
      return a - b;
    });
    const menorValor = precosCrescente[0];
    const totalComDesconto = totalDeCompras - menorValor / 2;
    console.log(totalComDesconto);
  } else {
    console.log(totalDeCompras);
  }
}
