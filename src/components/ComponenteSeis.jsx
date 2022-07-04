import React from 'react';
import clientes from '../cliente_data/client_data'

const ComponenteSeis = (props) => {

    function cliente(){
        return clientes.map(c =>{
            return <li key={c.id_client}>Nome: {c.nome} | Email: {c.email }</li>
        })
    }
    return (
        <div className='componente'>
            <p className="titulo">Titulo:</p>

            <ul>
                {clientes()}
            </ul>


        </div>
    )
}
export default ComponenteSeis