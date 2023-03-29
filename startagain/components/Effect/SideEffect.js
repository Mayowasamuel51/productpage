import axios from "axios";
import { useState } from "react";


// useState,
// if statement
// api backend ....
// fetch api
// loading



/// request

// axios  , fetch , jquery , ajax , superagent  /// which is used to fetch data from the backend.........

/*
2/18/2023

talked about useState ..
working with user input...
how to use click and onChange 

How to fetch data from backend 
*/

function SideEffect() {
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]) // we are storing the incoming data from the backend api................
    const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en'; // from the backend api


    const inputHandler = (event) => {
        setInput(event.target.value)
    }


    const fetchData = async (data) => {
        try {
            const response = await axios.get(`${baseUrl}/${data}`)
            console.log(response.data)
            setData(response.data) // updateing the state 
            setLoading(false)
            setError(false)

        } catch (err) {
            setError(true)
        }
    }

    const Button = () => {
        fetchData(input)
        setLoading(true) // we change the current from  false to true.............
    }


    // if statment 
    let page_load = '';
    if (error) { // if there is something worng with the network,, or someone typed in a worng word
        page_load = <div>
            <h1>PLEASE CHECK YOUR PROXY SEVER OR CHECK WHAT U TYPED IN </h1>
        </div>
    } else {
        if (loading) {  // we are performig loading
            page_load = <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        } else {
            // map over the result from the api 
            page_load =
                <div>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h2>Your Searched for {input}</h2>
                                    <div>
                                        <h3>PartOfSpeech is {item.meanings[0].partOfSpeech}</h3>
                                        <p>{item.meanings[0].definitions[0].definition}</p>
                                        <h4>{item.example}</h4>
                                    </div>
                                </div>
                            )
                        })

                    }


                </div>
        }
    }

    return (
        <>

            <div className="container  m-4  border border-info  p-4  ">
                <h1 className="fw-bolder text-center  ">  API DICTIONARY</h1>

                <input type="text" className="form-control  mt-4" value={input} onChange={inputHandler} />

                <button className="btn btn-dark w-100 mt-4 " onClick={Button}>Search</button>
                <div className="mt-5 container ">
                    {page_load}
                </div>
            </div>


        </>
    )
}

export default SideEffect;