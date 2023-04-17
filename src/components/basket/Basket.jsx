import React from 'react'
import ItemBasket from "./itemBasket";
import {Link} from "react-router-dom";

const Basket = (props) => {
    return (
        <div>
            <div>
                {
                    props.overlayProp.length > 0
                        ?
                        <div>
                            {
                                props.overlayProp.map(obj => {
                                    return (<ItemBasket
                                        key={obj.id}
                                        id={obj.id}
                                        title={obj.title}
                                        price={obj.price}
                                        img={obj.img}
                                        deleteItems={props.deleteItems}
                                    ></ItemBasket>)

                                })
                            }
                        </div>
                        :
                        <h1 className='col-md-8 offset-md-2'>Корзина пуста</h1>

                }
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                        <p>Итог</p>
                        <p>{props.totalPrice}</p>
                        <Link to={'/form'}>
                            <button
                                type='button'
                                className='w-10 btn btn-lg btn-primary'
                            >
                                Забронировать
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket