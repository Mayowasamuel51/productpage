import axios from "axios";
import { useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner";


function Api() {
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

    const fetchData = async (search) => {
        try {
            const res = await axios(`${baseUrl}${search}`)   //fetch something from the server 
            if (!res.ok) {
                console.log('something went worng')
            }
            const data = await res.json()

            console.log(data)
            setData(data)
            setLoading(false)
            setError(null)


        } catch (err) {
            console.log(err.message)
            setInput('')
            setError(err.message)
        }
    }
    const fetchPostData = (search) => {
        axios(`${baseUrl}${search}`).then((res) => {
            if (res.status === 200) {
                const api = res.data
                setData(api)
                setLoading(false)
                setError(false)
            }
            else if (res.data.status   ===   404) {
                console.log('not working fine')
               
            }
        }).catch((err) => {
            console.log(err.message)
            setError(true)
        })
    }

    let content = '';

    if (error) {
        content = <h3 className="text-danger text-center">network or check what u typed in </h3>
    }
    else {
        if (loading) {
            content = <div style={{ margin: 'auto', width: '50%' }}>
                <ThreeDots
                    height="80"
                    width="w00"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        } else {
            content = <div className="container  mt-5">
                <h1 className="text-center ">APP IS WORKING FINE</h1>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1 className="h4 p-4 ">{item.word}</h1>
                                <hr></hr>
                                <div>
                                    <p>
                                        {item.meanings[0].definitions[0].definition}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }



            </div>
        }
    }
    const buttonLogic = () => {
        setLoading(true);
        fetchPostData(input)
    }





    return (
        <>
            <div className="" style={{
                margin: 'auto', width: '50%'
            }}>
                <h1 className="text-success text-center">DICTIONARY PROJECT  </h1>
                {input}
                <input value={input} onChange={inputHandler} type="text" className="text-success m-4 form-control" />
                <button onClick={buttonLogic} className="btn btn-info mt-4 ms-4">Search</button>

                <div>

                    {content}
                </div>
            </div>


        </>

    )
}

export default Api;