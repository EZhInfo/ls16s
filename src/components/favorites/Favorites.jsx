import React from 'react'
import axios from "axios";
import {AppContext} from '../../App'
import Item from "./Item";

const Favorites = (props) => {

    const context = React.createContext(AppContext)
    // const context = React.useContext(AppContext)

    const onAddOverlay = async (obj) => {
        // const { data } = await axios.post(`http://localhost:3030/cart/${obj.id}`, obj)
        // const { data } = await axios.post('http://localhost:3030/cart', obj)
        axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart', obj)
        context.setOverlayItems([...props.overlayItems, obj]);
    }

    const onDeleteFav = (id) => {
        // const { data } = await axios.post(`http://localhost:3030/cart/${obj.id}`, obj)
        // const { data } = await axios.post('http://localhost:3030/cart', obj)
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/%{id}`)
        props.setFavorites((fav) => fav.filter(f => f.id !== id));
    }

    return (
        <div>
            <div>
                <h1 className='col-md-8 offset-md-2'>Избранные туры</h1>
            </div>
            <div>
                {
                    props.favorites.map(obj => {
                        return (
                            <Item
                                key={obj.id}
                                id={obj.id}
                                myId={obj.myId}
                                title={obj.title}
                                description={obj.description}
                                price={obj.price}
                                img={obj.img}

                                onDeleteFav={(id) => {
                                    onDeleteFav(id)
                                }}

                                onPlus={(cartObj) => {
                                    onAddOverlay(cartObj)
                                }}
                            >

                            </Item>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Favorites