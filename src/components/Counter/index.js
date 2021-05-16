import React, {useState, useContext} from 'react';
import {CountContext} from '../../store';


// class Counter extends React.Component {
//     state = {
//         count: 0
//     }

//     decrement = () => {
//         this.setState({count: this.state.count - 1});
//     }

//     reset = () => {
//         this.setState({count: 0});
//     }

//     increment = () => {
//         this.setState({count: this.state.count + 1});
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Counter App</h1>

                // <h3>Count: {this.state.count}</h3>

                // <button onClick={this.decrement}>
                //     - Decrement
                // </button>

                // <button onClick={this.reset}>
                //     Reset
                // </button>

                // <button onClick={this.increment}>
                //     + Increment
                // </button>
//             </div>
//         )
//     }
// }

const Counter = () => {
    // const [count, setCount] = useState(0); // [state, setState]
    const [count, setCount] = useContext(CountContext);

    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const increment = () => setCount(count + 1);

    return (
        <div>
            <h1>Counter App</h1>

            <h3>Count: {count}</h3>

            <button onClick={decrement}>
                - Decrement
            </button>

            <button onClick={reset}>
                Reset
            </button>

            <button onClick={increment}>
                + Increment
            </button>
        </div>
    )
}

export default Counter;
