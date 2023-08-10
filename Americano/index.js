function solucao(numeros) {
  // seu codigo aqui
  const numeroS = numeros.reduce((acumulador, elementoAtual) => {
    return acumulador + elementoAtual;
  });
  let index = 0;
  for (let i = 1; i <= numeroS; i++) {
    index = (index + 1) % numeros.length;
  }
  console.log(index === 0 ? numeros.length : index);
}
