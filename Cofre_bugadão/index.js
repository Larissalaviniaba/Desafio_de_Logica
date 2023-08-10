function processData(input) {

  input = input.toLowerCase();
  const linhas = input.trim().split("\n");
  const senhaCorreta = linhas[0].split("");
  const senhaDigitada = linhas[1].split("");
  let senhaFiltrada = "";
  let y = 0;

  for (let i = 0; i < senhaDigitada.length; i++) {
    if (senhaDigitada[i] === senhaCorreta[y]) {
      senhaFiltrada += senhaDigitada[i];
      y++;
    }
    if (y === senhaCorreta.length) {
      break;
    }
  }
  const resultado = senhaFiltrada === linhas[0] ? "SIM" : "NAO";
  console.log(resultado);
}