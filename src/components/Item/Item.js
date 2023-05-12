import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {
    return (
        <>
            <div className="cardProducts">
                <img className="imgProducts" src={img} alt={name} />
                <div className="textCard">
                    <h3> {name} </h3>
                    <p>Precio: {price}</p>
                    <p>Id: {id}</p>
                </div>
                <Link to={`/item/${id}`} className="btnProducts"> Ver detalles </Link>
            </div>
        </>

    )
}

/*const Item = ({id,name,price,category,img,stock,description}) => {
    return (
        <article className='cardItem'>
            <header className='header'>
                <h3 className='itemHeader'>{name}</h3>
            </header>
            <picture>
                <img src={img} alt={name} className='itemImage'/>
            </picture>
            <section>
                <p className='info'>
                    Precio: ${price}
                </p>
                <p className='info'>
                    Disponible: {stock}
                </p>
            </section>
            <footer className='itemFooter'>
                <Link to={`/item/${id}`} className='option'>Ver detalle</Link>
            </footer>
        </article>
    )
}*/

export default Item