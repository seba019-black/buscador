import { Button, TextField } from "@mui/material";
import React,{ useState } from "react";
import './Buscador.css';
const Buscador = (props) => {
    const [texto, setTexto]= useState('');

    const onTextoChange= (evento) =>{
        setTexto(evento.target.value);
    }

    const onBuscarClick =() =>{
        if(texto.length > 3){
            props.onBuscar(texto);

        }
        
    }


    return (
        <section className="buscador" role='search'>
             <TextField  label="Buscar Noticias"
                         variant="outlined" 
                         value={texto}
                         onChange={onTextoChange}
                         role='searchbox'
                         />
            <Button variant="contained" onClick={onBuscarClick}>Buscar</Button>
        </section>
       
    )
}

export default Buscador;