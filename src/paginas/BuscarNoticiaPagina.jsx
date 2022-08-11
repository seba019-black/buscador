import {Container,Box, Grid } from "@mui/material";
import { useState } from "react";
import Buscador from "../componentes/Buscador";
import ListaNoticias from "../componentes/ListaNoticias";
//import Header from "../componentes/Header";
//import miFooter from "../componentes/miFooter";


const BuscarNoticiaPagina = () => {
    const [busqueda, setBusqueda]= useState('');
    const onBuscar = (criterio) =>{
        setBusqueda(criterio);
    }
    return (

        <Container maxWidth="md" >

            <Box  sx={{bgcolor: '#cfe8fc', height:'100%'}} >
                <Grid container spacing={2}>
                    
                        <Grid item xs={12} md={12}>
                            <Buscador onBuscar={onBuscar}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <ListaNoticias busqueda={busqueda}/>
                        
                    </Grid>
                    
                            
                       
                         
               
                </Grid>
                            
            </Box>
            
        </Container>
        
    )
}

export default BuscarNoticiaPagina;