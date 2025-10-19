(() => {
  const titulo = document.getElementById("titulo");
  const botaoOn = document.getElementById("botao-on");
  const botaoOff = document.getElementById("botao-off");

  // Guarda o texto original
  const mensagemOriginal = titulo?.textContent || "Tema escuro:";

  // dark mode ativado (TEXTO)
  botaoOn?.addEventListener("click", () => {
    if (!titulo) return;
    // injeta o CSS de modo escuro na aba ativa
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs && tabs[0];
      if (!tab || !tab.id) return;
      chrome.scripting.insertCSS({ target: { tabId: tab.id }, files: ["dark-mode.css"] }, function () {
        if (chrome.runtime.lastError) console.error("insertCSS error:", chrome.runtime.lastError);
      });
    });
    titulo.textContent = "Modo escuro ativado";
    const s = document.querySelector('small');
    if (s) s.style.display = 'inline';
  });

  // Dark mode desativado (TEXTO)
  botaoOff?.addEventListener("click", () => {
    if (!titulo) return;
    // remove o CSS de modo escuro da aba ativa
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs && tabs[0];
      if (!tab || !tab.id) return;
      chrome.scripting.removeCSS({ target: { tabId: tab.id }, files: ["dark-mode.css"] }, function () {
        if (chrome.runtime.lastError) console.error("removeCSS error:", chrome.runtime.lastError);
      });
    });
    titulo.textContent = "Modo escuro desativado";
    const s = document.querySelector('small');
    if (s) s.style.display = 'none';
  });
})();



