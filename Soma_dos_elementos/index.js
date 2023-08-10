function solucao(lista) {
  const result = lista.reduce((accumulator, currentElement, index, array) => {
    return (accumulator += currentElement);
  });
  console.log(result);
}
