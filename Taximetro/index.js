function solucao(min, km) {
  //seu codigo aqui
  const totalMin = min <= 20 ? min * 50 : 20 * 50 + (min - 20) * 30;
  const totalKm = km <= 10 ? km * 70 : 10 * 70 + (km - 10) * 50;
  const valorTotal = Math.floor(totalMin + totalKm);
  console.log(valorTotal);
}
