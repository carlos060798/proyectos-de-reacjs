
import { createContext, useState, useEffect } from "react";

const NoticiasContext = createContext();

const NoticiasProvaider = ({ children }) => {
    const [categoria, setCategoria] = useState("General");
    const [noticias, setNoticias] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


   
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=fb01818ccb0849138b62fbb873c262cd`;
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            setNoticias(data.articles);
            setTotalPages(data.totalResults);
            setPage(1);
        }
        consultarAPI();
    }, [categoria]);

    // para cambiar la pagina
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&page=${page}&apiKey=fb01818ccb0849138b62fbb873c262cd`;
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            setNoticias(data.articles);
            setTotalPages(data.totalResults);
        }
        consultarAPI();
    }, [page]);
    
    const handleCategoria = (e) => {
        setCategoria(e.target.value)    }

    const handlePage = (e,value) => {
        console.log(value);
        setPage(value);
    }


    



    return(
        <NoticiasContext.Provider value={{
            categoria,
            setCategoria,
            handleCategoria,
            noticias,
            setNoticias,
            page,
            setPage,
            totalPages,
            setTotalPages,
            handlePage
        }}>
        
        {children}
        </NoticiasContext.Provider>
    )
}

export{
    NoticiasProvaider,
    NoticiasContext
}