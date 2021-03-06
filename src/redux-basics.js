//store 

const redux = require('redux');

const createStore = redux.createStore;
//reducers
const initialState = {
    counter: 1
}
const rootReducer = (state = initialState, action) => {
    if(action.type=='INCREMENT'){
        return {
            ...this.state,
            counter:this.state.counter+action.value
        }
    }
    if(action.type=='INCREMENT'){
            return {
                ...this.state,
                counter:this.state.counter+action.value
            }
        }
    return state;
}

const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log('subscription',store.getState());
})
console.log(store.getState());


//dispatching action
store.dispatch(({type:'INCREMENT',value:1}));
store.dispatch({type:'ADD_COUNTER',value:10});

console.log(store.getState());



//subscriptions
