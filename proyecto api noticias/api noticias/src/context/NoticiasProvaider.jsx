
import { createContext, useState, useEffect } from "react";

const NoticiasContext = createContext();

const NoticiasProvaider = ({ children }) => {
    return(
        <NoticiasContext.Provider value={{}}>
        
        {children}
        </NoticiasContext.Provider>
    )
}

export{
    NoticiasProvaider,
    NoticiasContext
}