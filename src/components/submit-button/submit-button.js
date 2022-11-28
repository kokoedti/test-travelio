import { useState } from 'react'
import './submit-button.css'



const trigger = (param, setEvent) => {
    setEvent({
        event:'trigger',
        counter: param
    })
}


const SubmitButton = ({label, setEvent}) => {
    
    let [counter, setCounter] = useState(1)
    
    return(
        <button className="button" onClick={() => {
            setCounter(counter + 1)
            trigger(counter, setEvent)
        }}>
            {label ? label : 'OK'}
        </button>
    )
}

export default SubmitButton;