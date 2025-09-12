(() => {
  const titulo = document.getElementById("titulo");
  const botaoOn = document.getElementById("botao-on");
  const botaoOff = document.getElementById("botao-off");

  // Guarda o texto original
  const mensagemOriginal = titulo?.textContent || "Tema escuro:";

  // dark mode ativdado (TEXTO)
  botaoOn?.addEventListener("click", () => {
    if (!titulo) return;
    titulo.textContent = "Modo escuro ativado";
  });

  // Dark mode desativado (TEXTO)
  botaoOff?.addEventListener("click", () => {
    if (!titulo) return;
    titulo.textContent = "Modo escuro desativado";
  });
})();


