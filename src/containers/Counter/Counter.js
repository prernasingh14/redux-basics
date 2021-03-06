import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl.jsx';
import CounterOutput from './../../components/CounterOutput/CounterOutput.jsx';


class Counter extends Component {
    state = {
        counter: 0,
        results:[]
    }
    //now we need some function to change their values
    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } });
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } });
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } });
                break;
            default:
                break;
        }


    }
    render() {
        return (
            <div className="Counter">
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="increment" clicked={this.props.onIncrementHandler} />
                <CounterControl label="decrement" clicked={this.props.onDecrementHandler} />
                <CounterControl label="add by 10" clicked={this.props.onAddHandler} />
                <CounterControl label="subtract by 5" clicked={this.props.onSubtractHandler} />
                <hr/>
                <button onClick={this.props.onStoreResultHandler}>Show Result </button>
                <ul>
                    {this.props.storeResult.map(strResult=>(
                        <li key={strResult.id} onClick={()=>this.props.onDeleteResulttHandler(strResult.id)}>{strResult.value}</li>)
                    )}
                    
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        storeResult:state.results,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementHandler: () => {dispatch({ type: 'INCREMENT' })},
        onDecrementHandler: () => {dispatch({ type: 'DECREMENT' })},
        onAddHandler: () => {dispatch({ type: 'ADD',value:10})},
        onSubtractHandler: () => dispatch({ type: 'SUBTRACT',value:5 }),
        onStoreResultHandler: () => {dispatch({ type: 'STORE_RESULT' })},
        onDeleteResulttHandler: (id) => {dispatch({ type: 'DELETE_RESULT' ,resultId:id})},
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Counter);