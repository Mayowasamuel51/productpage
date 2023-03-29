//useState , useEffect , useRef, useMemo , useCallback
import { useState } from "react";

function Myitem() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const surnameHandler = (e) => {
        setSurname(e.target.value)
    }
    const userdata = [
        { name: 'mayowa', surname: 'okay' },
        { name: 'sola', surname: 'iphone' },
    ]   

    function powerButton() {
        const storename = userdata.find((item) => {
            return item.name === name && item.surname === surname
        })

        if (storename) {
            console.log('this is working')
        } else {
            console.log('this is worng by u ')
        }
    }





    return (
        <>
            
            <div className="container mt-5">
                <h1>{name}</h1> <h1>{surname}</h1>
                

                <input type="text" value={name} onChange={nameHandler} className="form-control mt-4 " />


                <input type="text" value={surname} onChange={surnameHandler} className="form-control mt-4" />

                <button className="btn btn-info"  onClick={powerButton}>login</button>

            </div>

        
        </>

    )
}


export default Myitem;