import './item-card.css'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const ItemCard = ({itemCard}) => {
    let image = itemCard.imageLinks ? itemCard.imageLinks.thumbnail : null

    return (
        <div className='item-canvas'>
            <div className='title-card'>
                <h2>
                    {itemCard.title}
                </h2>
            </div>
            <div className='image-canvas'>
                {
                    image !== null ? <img src={image} /> : <h2>Image Not Found</h2>
                }
            </div>
            <div className='content-card'>
                <h3>
                    {itemCard.publisher ? itemCard.publisher : 'Publisher not found'} | {itemCard.language.toUpperCase()}
                </h3>
                <Rater total={5} rating={2} />
            </div>
            
        </div>
    )
}

export default ItemCard