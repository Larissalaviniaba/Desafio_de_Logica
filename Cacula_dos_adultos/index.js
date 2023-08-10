function solucao(lista) {
  // seu codigo aqui
  const podemParticipar = lista.filter((pessoa) => {
    return pessoa >= 18;
  });

  if (podemParticipar.length === 0) {
    console.log("CRESCA E APARECA");
  } else {
    const idadesDecrescente = podemParticipar.sort((a, b) => {
      return a - b;
    });
    const maisNovo = idadesDecrescente[0];
    console.log(maisNovo);
  }
}
