//https://youtu.be/k4lHXIzCEkM
// React Hooks ====   useState, useEffect,
// working with events .. click, change,,,
// working with user inputs
/// display user input
/// build a dictionary  api ...

// what is useState Hook.................
// useState is used to store data and track your state in a component u are working in
// what can u store in useState ... string,  number, boolean, object, array, mutiple object in a array , .. able to store data and information.

import React, { useState } from "react";
import { useEffect } from "react";

const Events = () => {
    const [data, setData] = useState({ name: 'Mayowa', level: 3.4, age: 19 })
    const [string, setString] = useState('Mayowa')
    const [count, setCount] = useState(10)

    /// setCount is a function that's udpate  the count current value which is 10 at the moment

    // setTimeout(() => {
    //     setCount(1000); // we are updating count from 0  to 1000 . after 3 seconds 
    // }, 3000)

    const increment = () => {
        setCount(prevcount => prevcount + 1)
        // setCount(count +  1 ) // this is worng to do as a react developer 
    }
    const dercement = () => {
        setCount(prevcount => prevcount - 1)
    }

    const changeWord = () => {
        setString('this is new word ')
    }

    return (
        <>
            <div >
                <h1>  {count}</h1>
                <h1>{string}</h1>
                <button style={{ marginLeft: '30px' }} onClick={increment} >count +++</button>
                <button style={{ marginLeft: '30px' }} onClick={dercement}  >count  --</button>
                <br />  <br />
                <button onClick={changeWord}>change word</button>

            </div>

        </>
    )
}
export default Events;  