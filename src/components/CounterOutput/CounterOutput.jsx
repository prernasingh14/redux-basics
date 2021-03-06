import React from 'react';
import './CounterOutput.css';

const CounterOutput = (props) => {
    return (
        <div className="CounterOutput">
          Counter value:{props.value}
        </div>
    )
}



export default CounterOutput;