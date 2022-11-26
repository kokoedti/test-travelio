import { useState } from 'react'
import './submit-button.css'



const SubmitButton = (props) => {
    const [counter, setCounter] = useState(1)

    const trigger = () => {
        setCounter(counter + 1)
        props.setEvent({
            event:'trigger',
            counter: counter
        })
    }

    return(
        <div>
            <button className="button" onClick={() => trigger}>
                {props.label ? props.label : 'OK'}
            </button>
        </div>
    )
}

export default SubmitButton;