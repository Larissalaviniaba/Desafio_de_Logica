function processData(input) {
  //Enter your code here
  const linhas = input.trim().split("\n");
  const n = parseInt(linhas[0]);
  const coordenadas = [];

  for (let i = 1; i < linhas.length; i++) {
    const coordenadasFormatadas = linhas[i].split(" ");
    coordenadas.push({
      x: parseFloat(coordenadasFormatadas[0]),
      y: parseFloat(coordenadasFormatadas[1]),
    });
  }
  const calcularDistancia = (x1, x2, y1, y2) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  };
  const distanciaMaxima = (coordenadas) => {
    let maiorDistancia = 0;
    for (let i = 0; i < coordenadas.length; i++) {
      for (let y = i; y < coordenadas.length; y++) {
        const x1 = coordenadas[i].x;
        const y1 = coordenadas[i].y;
        const x2 = coordenadas[y].x;
        const y2 = coordenadas[y].y;
        const result = calcularDistancia(x1, x2, y1, y2);
        maiorDistancia = result > maiorDistancia ? result : maiorDistancia;
      }
    }
    return maiorDistancia;
  };
  console.log(distanciaMaxima(coordenadas));
}
