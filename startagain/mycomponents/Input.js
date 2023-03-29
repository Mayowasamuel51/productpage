import { useState } from "react";
import Auth from "../Message/Auth";
import Error from "../Message/Error";



function Input() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [bool, setBool] = useState(false)
    // create a function
    const nameInputHanlder = (e) => {
        setName(e.target.value) // updating the current value to whatever the user type in the input
    }
    const surnameInputHanlder = (e) => {
        setSurname(e.target.value) // updating the current value to whatever the user type in the input
    }

    const database = [
        { name: 'mayowa', surname: 'samuel' },
        { name: 'shola', surname: 'bukky' },
        { name: 'funmi', surname: 'adefunmi' }
    ]
    
    let pageContent  = '';
    const checkAuth = () => {
        const checking = database.find((item) => {
            return item.name === name && item.surname ===surname
        })

        if (checking) {
            console.log('welcome to the app')
            setBool(true)
        } else {
            console.log('sorry please check your info ')
           setBool(false)
        }

        
    }

    if (bool) {
        pageContent = <Auth/>
    } else {
        pageContent = <Error/>
    }


    return (
        <>
            <div className="container mt-4">
                <h1>{name}</h1>

                <h1>{surname}</h1>
                <input type="text" value={name} onChange={nameInputHanlder} placeholdee="name" className="form-control mb-4" />

                <input type="text" placeholdee="surname" value={surname} onChange={surnameInputHanlder} className="form-control mb-4" />

                <button onClick={checkAuth} className="btn btn-dark">check info</button>
                <div className="mt-5 ">
                  {pageContent}
                </div>
            </div>
        </>
    )

}

export default Input;