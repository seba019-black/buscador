import { API_KEY,APY_NEWSAPI } from "./constantes";


export const getNoticias = async (criterioBusqueda ='',pagina=1) =>{
    try {
        const respuesta = await fetch(`${APY_NEWSAPI}q=${criterioBusqueda}&apiKey=${API_KEY}&page=${pagina}&pageSize=10&language=es`)
        return respuesta.json();
    } catch (error) {
        return {isError: true};
    }

};