import { createContext, useState } from "react";

export const initialState = {
temas: {
  claro: {
     navbar: "green",
     home: "grey",
     footer: "orange",
     letras: "black"
  },
  oscuro: {
    navbar: "white",
    home: "green",
    footer: "green",
    letras: "white"
  }
 }
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
    const [tema, setTema]= useState(initialState.temas.claro)
   
     const handleTheme = () => {
    setTema ((t)=> (t===initialState.temas.claro ? initialState.temas.oscuro: initialState.temas.claro))
    }
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{tema,handleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
