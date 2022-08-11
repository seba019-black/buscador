import { useEffect, useState } from "react";
import { getNoticias } from "../../servicios/noticias";
import Loading from "../Loading";
import Noticia from "../Noticia";
import Paginado from "../Paginado";
import "./ListaNoticias.css";
import Footer from "../Footer";


const Noticias = ({noticias}) =>{
    return (
        <section className="lista-noticias">

            {noticias && noticias.map((val , index)=> <Noticia key= {index} {...val} />)} 
            
        </section>
    )
}

const ListaNoticias = ({busqueda}) => {

    const [noticias, setNoticias] = useState();
    const [loading, setLoading] = useState(false);
    const [pagina, setPagina]= useState(1);
    const [cantidadPaginas, setCantidadPaginas]= useState(0);


    const getNoticiasDesdeServicio = async(busqueda) =>{
        setLoading(true);
        const respuesta = await getNoticias(busqueda, pagina);
        console.log(respuesta);
        setNoticias(respuesta.articles);
        const totalPaginas= Math.ceil(parseInt(respuesta.totalResults)/10);
        setCantidadPaginas(totalPaginas);
        setLoading(false);
    };

    const onChangePaginacion = (_evento,p) => {
        setPagina(p);
    }

    useEffect(() => {
        if(busqueda){
            getNoticiasDesdeServicio(busqueda, pagina)
        }
       
    },[busqueda, pagina])
    //const noticias = [1,2,3].map(val => <Noticia/>);
    if(loading){
        return  <Loading/>
    }
    if (!noticias){
        return null;
    }
    return (
        <>
             <body class="body">
                <p>Esta viendo 10 noticias de {cantidadPaginas*10} resultados</p>
                <Noticias noticias={noticias}/>
                <Paginado page={pagina} count={cantidadPaginas} onChange={onChangePaginacion}/>
                <Footer/>
            </body>
            
        </>
           
        
    )
};

export default ListaNoticias;