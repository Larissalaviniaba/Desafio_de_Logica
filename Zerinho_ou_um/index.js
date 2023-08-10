function solucao(jogadores) {
  //seu codigo aqui
  const vencedor0 = jogadores.filter((jogador) => {
    return jogador.jogada === 0;
  });
  const vencedor1 = jogadores.filter((jogador) => {
    return jogador.jogada === 1;
  });

  if (vencedor0.length !== 1 && vencedor1.length !== 1) {
    console.log("NINGUEM");
  } else {
    const vencedor = vencedor0.length === 1 ? vencedor0 : vencedor1;
    console.log(vencedor[0].nome);
  }
}
