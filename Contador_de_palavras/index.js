function solucao(texto) {
  // Seu codigo aqui
  const textoFormatado = texto.trim();
  const arrayPalavras = textoFormatado.split(" ");
  
  const filtroPalavras = arrayPalavras.filter((palavra) => {
    return palavra !== "";
  });
  console.log(filtroPalavras.length);
}
