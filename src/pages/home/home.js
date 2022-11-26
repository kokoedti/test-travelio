import { useState } from 'react';
import SubmitButton from '../../components/submit-button/submit-button';
import './home.css';


const receiveMessage = (param) => {
    console.log(param)
}

const Home = (props) => {
    const [message] = useState({
        header: 'Hello',
        subMessage: 'Welcome back my Lord!',
        body: 'myLord'
    })

    return (
        <div className='App'>
            <div >
                <h1>{message.header}</h1>
                <h2>
                    {message.subMessage}
                </h2>
            </div>
            <div >
                <h3>
                    {message.body}
                </h3>
            </div>
            <div>
                <SubmitButton label='Hit Me!' setEvent={receiveMessage}></SubmitButton>
            </div>
        </div>
    )
}

export default Home;