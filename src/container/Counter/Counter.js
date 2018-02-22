import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <h3>--------------REDUX-COUNTER-------------</h3>
                <br/>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.ondecrementCounter}  />
                <CounterControl label="Add 10" clicked={ this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store-Results</button>
                <ul>
                    {this.props.storedResults.map((ele)=>{
                        return (<li key={ele.id} onClick={()=>this.props.onDeleteResult(ele.id)}><strong>{ele.val}----X</strong><br/></li>)
                    })}
                </ul>    
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        storedResults:state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        ondecrementCounter:()=>dispatch({type:"DECREMENT"}),
        onAddCounter:()=>dispatch({type:'ADD', val:10}),
        onSubtractCounter:()=>dispatch({type:'SUBTRACT',val:5}),
        onStoreResult:()=>dispatch({type:'STORE_RESULT'}),
        onDeleteResult:(id)=>dispatch({type:'DELETE_RESULT',resultElId:id})

    };
};




export default connect(mapStateToProps, mapDispatchToProps)(Counter);