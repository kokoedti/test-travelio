import './input-text.css'
import { debounce } from 'lodash'

const listener = debounce((event, setEvent) => {
    const inputValue = event.target.value.replace(/ /g, '')
    if(inputValue !== ''){
        setEvent({
            event: 'input',
            value: inputValue
        })
    }
}, 500)

const InputText = ({placeholder, setEvent}) => {

    return(
        <input type="text"  placeholder={placeholder} onChange={(event) => {
            listener(event, setEvent)
        }} />
    )
}

export default InputText;