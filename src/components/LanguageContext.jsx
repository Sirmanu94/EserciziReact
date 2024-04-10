import React, { createContext } from "react";

const LanguageContext = createContext("en")


export default LanguageContext

// Per creare un context si importa la funzione createContext da React 
// si assegna il componente ad una variabile a cui diamo il valore createContext("valoreDiDefaultDelContext")
// e si esporta il componente.

// Importiamo il componente nel grado piu alto del ramo dei componenti e tramite il metodo: LanguageContext.Provider tutto quello che sarà all'interno di questo tag
// beneficierà del valore del context.