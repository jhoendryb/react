import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("Efecto", { enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log({ clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) window.addEventListener("pointermove", handleMove);

    // CLENAUP
    // CUANDO EL COMPONENTE SE DESMONTA
    // TAMBIEN SE EJECUTA CUANDO CAMBIA LAS DEPENDENCIAS
    // EL EFECTO DE NUEVO
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  let styleBolita = {
    position: "absolute",
    backgroundColor: "rgb(0, 0, 0, 0.5)",
    border: "1px solid #fff",
    borderRadius: "50%",
    opacity: 0.8,
    pointerEvents: "none",
    left: -20,
    top: -20,
    width: 40,
    height: 40,
    transform: `translate(${position.x}px, ${position.y}px)`
  };

  return (
    <>
      <div style={styleBolita} />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  )
};

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App

// const [mounted, setMounted] = useState(true);
// { mounted && <FollowMouse /> }
// <button onClick={() => setMounted(!mounted)}>
//   Toggle mounted FollowMouse component
// </button>
