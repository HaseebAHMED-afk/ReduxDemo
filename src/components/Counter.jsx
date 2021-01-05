import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    let [value, setValue] = useState(0)
    //let [counter, setCounter] = useState(50)
    const dispatch = useDispatch()
    const counter = useSelector((state) => {
        return state.counter
    })

    const addChange = (e) =>{
        setValue(e.target.value)
    }

    const increase = () =>{
        //setCounter(counter + 1)
        dispatch({type: "INCREMENT"})
    }

    const decrease = () =>{
        //setCounter(counter - 1)
        dispatch({type: "DECREMENT"})
    }


    const increaseByValue = () => {
        //setCounter(counter + Number(value))
        dispatch({type:"INCREMENT_BY_PAYLOAD" , payload: Number(value)})
    }


    return (
        <div>
            <h1>
                Counter {counter}
            </h1>
            <input type='text' onChange={addChange} value={value} />
            <button onClick={increase} >Increase</button>
            <button onClick={decrease} >Decrease</button>
            <button onClick={increaseByValue} >Increase By Value</button>
        </div>
    )
}

export default Counter
