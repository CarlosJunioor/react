import React from 'react';

export default function(props){
    return (
        <div className="componente">
            <p className="titulo">Titulo: {props.title}</p>

            {props.valor ? <p>Verdadeiro</p> : <p>Falso</p>}


        </div>
    )

}