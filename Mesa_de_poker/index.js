function solucao(min, max, valores) {
  //seu codigo aqui
  const resultado = valores.filter((valor) => {
    return valor >= min && valor <= max;
  });
  console.log(resultado);
}
