
import { createContext, useState, useEffect } from "react";

const NoticiasContext = createContext();

const NoticiasProvaider = ({ children }) => {
    const [categoria, setCategoria] = useState("General");
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=fb01818ccb0849138b62fbb873c262cd`;
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            setNoticias(data.articles);
            console.log(data.articles);
        }
        consultarAPI();
    }, [categoria]);
    
    const handleCategoria = (e) => {
        setCategoria(e.target.value)    }


    



    return(
        <NoticiasContext.Provider value={{
            categoria,
            setCategoria,
            handleCategoria,
            noticias
        }}>
        
        {children}
        </NoticiasContext.Provider>
    )
}

export{
    NoticiasProvaider,
    NoticiasContext
}