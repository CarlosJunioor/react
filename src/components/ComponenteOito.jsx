import React from 'react';

export default function (props){

    function condicao (){
        if(props.valor >= 10){
            return <p>O numero {props.valor} e igual ou superior a 10 </p>
        } else {
            return <p>O numero {props.valor} e inferior a 10.</p>
        }
    }

    return (
        <div className="componente">
            <p className="title">Titulo:{props.title}</p>
            {condicao(props)}
        </div>
    )
}