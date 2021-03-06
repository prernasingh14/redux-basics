import React from 'react';
import './CounterCountrol.css';



const CounterControl=(props)=>{
return (
    <div className="CounterControl" onClick={props.clicked}>
       {props.label}
    </div>
)
}


export default  CounterControl;