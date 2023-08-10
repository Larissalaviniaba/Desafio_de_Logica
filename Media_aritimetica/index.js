function solucao(lista) {
  //seu codigo aqui
  const result = lista.reduce((accumulator, currentElement, index, array) => {
    return (accumulator += currentElement);
  });
  console.log(result / lista.length);
}
