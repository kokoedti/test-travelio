import { useState } from 'react';
import './home.css';
import { getApi } from '../../services/api-get';
import InputText from '../../components/input-text/input-text';
import ItemCard from '../../components/item-card/item-card';



const Home = () => {
    const [message] = useState({
        header: 'Book Search',
    })

    const [item, setItem] = useState([])

    const callApi = (keyword) => {
        getApi(keyword).then((res) => {
            setItem([...res.data.items])
            // console.log(item)
        })
    }

    const receiveInput = (param) => {
        callApi(param.value)
    }


    return (
        <div className='App'>
            <div >
                <h1>{message.header}</h1>
                <InputText placeholder='Search!' setEvent={receiveInput}></InputText>
            </div>
            
            {
               item.length !== 0 && item.map((listItem, index) => {
                    return  (
                        <div className='item-row' key={index}>
                            <ItemCard itemCard={listItem.volumeInfo}></ItemCard>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;