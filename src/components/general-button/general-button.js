import './general-button.css'

const trigger = (param, setEvent) => {
    setEvent({
        event: param,
        message: 'do as label say'
    })
}

const GeneralButton = ({label, setEvent}) => {
 

    return(
        <div>
       <button className="button" onClick={() => {
                trigger(label, setEvent)
            }}>
                {label ? label : 'Hit Me!'}
            </button>
        </div>
    )
}

export default GeneralButton;