function solucao(carta) {
  //seu codigo aqui
  const cartasTruco = ["Q", "J", "K", "A", "2", "3"];
  const indexCarta = cartasTruco.findIndex((cartaTruco) => {
    return carta === cartaTruco;
  });
  const manilha =
    indexCarta === cartasTruco.length - 1
      ? cartasTruco[0]
      : cartasTruco[indexCarta + 1];
  console.log(manilha);
}
