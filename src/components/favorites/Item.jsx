import React, {useState} from 'react';

// import {AppContext} from '../../App'

function Item(props) {

    // const context = React.useContext(AppContext)
    // const context = React.createContext(AppContext)

    const [added, setAdded] = useState(false);

    const onClickAdd = () => {
        setAdded(!added);
        let id = props.id;
        let myId = props.myId;
        let title = props.title;
        let description = props.description;
        let price = props.price;
        let img = props.img;
        props.onPlus({title, description, price, img, id, myId});
    }

    const onDelete = () => {
        props.onDeleteFav(props.id)
    }

    return (
        <div className='container py-3'>
            <main>
                <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center'>
                    <div className='col px-3 py-3'>
                        <div className='card md-6 rounded'>
                            <div className='card-header py-2 px-3'>

                                <button
                                    type='button'
                                    className='w-100 btn btn-lg btn-primary'
                                    onClick={onDelete}
                                >X
                                </button>

                                {/* <p>Заголовок</p> */}
                                <p>{props.title}</p>
                                {/* <img className='rounded' src='/img/first.jpg' width={'80%'} /> */}
                                <img className='rounded' src={props.img} width={'80%'} alt={""}/>
                                {/* <p>Описание</p> */}
                                <p>{props.description}</p>
                                {/* <p>Цена</p> */}
                                <p>{props.price}</p>
                                <div>
                                    <button
                                        type='button'
                                        className='w-100 btn btn-lg btn-primary'
                                        onClick={onClickAdd}
                                    >
                                        {
                                            added ?
                                                <img width={15}
                                                     src={added ? '/img/icon.png' : ''}
                                                     alt={""}/>
                                                :
                                                'Добавить в корзину'
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
}

export default Item;
