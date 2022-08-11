import Buscador from "./index";
import {render, screen} from '@testing-library/react';

describe('<Buscador/>',() =>{
    //Loading
    it('Debe aparecer en el documento',async() =>{
        //Arrange
        //Act
        render(<Buscador/>);
        //Assert
        const buscador = screen.getByRole('search');
        expect(buscador).toBeInTheDocument();
        
    })
    //No ahi Noticia
    //Noticia encontrada
})