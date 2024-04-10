import { useCounter } from "../useCounter"

function HookCounter({initialValue = 0}){
 
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)


    return(
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onReset}>-</button>


        </div>
    )
}

export default HookCounter