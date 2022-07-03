import React from 'react';
import ComponenteCinco from './ComponenteCinco';

const ComponenteQuatro = (props) => {
    return (
        <div className='componente'>
            <p className='titulo'>Title: Componente 4</p>
           <ComponenteCinco title="Texto vindo do componente CINCO"/>
        </div>
    )
}
export default ComponenteQuatro