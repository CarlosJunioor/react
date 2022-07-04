import React from 'react';
import './App.css'

// COMPONENTES 
import ComponenteDois from './components/ComponenteDois';
import ComponenteUm from './components/ComponenteUm';
import ComponenteTres from './components/ComponenteTres';
import ComponenteQuatro from './components/ComponenteQuatro';
import ComponenteSeis from './components/ComponenteSeis';



function App () {
    return ( 
        <>

        <ComponenteUm />
        <ComponenteDois />
        <ComponenteTres title='PROP SENTED' title2='PROP SENTED 2' />
        <ComponenteQuatro title="Componente 4">
        </ComponenteQuatro>
        <ComponenteSeis />

        </>
    )
}
export default App