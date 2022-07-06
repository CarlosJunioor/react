import React from 'react';
import './App.css'

// COMPONENTES 
import ComponenteDois from './components/ComponenteDois';
import ComponenteUm from './components/ComponenteUm';
import ComponenteTres from './components/ComponenteTres';
import ComponenteQuatro from './components/ComponenteQuatro';
import ComponenteSeis from './components/ComponenteSeis';
import ComponenteSete from './components/ComponenteSete';
import ComponenteOito from './components/ComponenteOito';



function App () {
    return ( 
        <>
        <ComponenteUm />
        <ComponenteDois />
        <ComponenteTres title='PROP SENTED' title2='PROP SENTED 2' />
        <ComponenteQuatro title="Componente 4" />
        <ComponenteSeis />
        <ComponenteSete title="Componente 7" valor={0} />
        <ComponenteOito title="Componente 8" valor={5}/>
        </>
    )
}
export default App