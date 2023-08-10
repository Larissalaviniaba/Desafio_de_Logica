function processData(input) {
  //Enter your code here
  input = input.trim();
  const arrayPalvra = input.split("");
  const palavraMinuscula = arrayPalvra.every((letra) => {
    return letra === letra.toLowerCase();
  });
  const palavraMaiuscula = arrayPalvra.every((letra) => {
    return letra === letra.toUpperCase();
  });
  if (palavraMaiuscula || palavraMinuscula) {
    console.log(input.toLowerCase());
  } else {
    const primeiraLetra = input[0];
    const restoPalavra = input.slice(1);
    if (
      primeiraLetra === primeiraLetra.toLowerCase() &&
      restoPalavra === restoPalavra.toUpperCase()
    ) {
      const primeiraLetraCapsLock =
        primeiraLetra.toUpperCase() + restoPalavra.toLowerCase();
      console.log(primeiraLetraCapsLock);
    } else {
      console.log(input);
    }
  }
}
