import { useState } from 'react';
import  './Track.css'   // this is how u import css files 


function Track() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
  
    // Working with user input................
    const nameHandler = (event) => {
        setName(event.target.value) // we are updateing the name state  to  what the user type in the input  .....
    }
    const addressHandler  = (event) => {
        setAddress(event.target.value)
    }
    const emailHandler = (event) => {
        setEmail(event.target.value) // we are updateing the email  state to  what the user type in the input .....
    }

    //note ...onChange is only used for input  flieds
    const ShowBtn = () => {
        console.log(address, name , email)
    }
    return ( 
        <div>
            <h1>USER INPUT</h1>
            <div className='box'>
                <h1>test {name }</h1>
                <input type="text" onChange={nameHandler} value={name} />

                <h3>your email is  {email }</h3>
                <input type="email" onChange={emailHandler} value={email} />

                <h3>your address  is {address} </h3>
                <input type="text" onChange={addressHandler} value={address} />

                <br/> <br/>
                <button onClick={ShowBtn}>Submit</button>

                
            </div>
        </div>
    )
}

export default Track;