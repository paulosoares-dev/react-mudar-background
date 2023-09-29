import "./App.css";

import { useState } from "react";

export default function App() {
  const corDeFundoVermelho = "bg-vermelho";
  const corDeFundoAzul = "bg-azul";

  const [estiloAtualizado, setEstiloAtualizado] = useState(true);

  const alterarCor = () => {
    setEstiloAtualizado(!estiloAtualizado);
  };

  return (
    <div className="display">
      <div className="container">
        <h2>Altere o estilo do elemento</h2>
        <div
          className={estiloAtualizado ? corDeFundoVermelho : corDeFundoAzul}
        ></div>
        <p>Clique no botão abaixo para alterar a cor do elemento.</p>
        <button onClick={alterarCor}>Clique aqui</button>
      </div>
    </div>
  );
}