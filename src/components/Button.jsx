import { useEffect, useState } from "react";

export function Button() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => console.log("Rodando..."), 1000);

    return () => {
      clearInterval(timer);
      console.log("Componente desmontado, timer limpo");
    };
  });

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
}
