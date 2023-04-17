import React from 'react'
import Item from './Item'
import axios from 'axios';

const CartItem = (props) => {

  const onAddOverlay = async (obj) => {
    try {
      const findOverlay = props.overlayItems.find(objOver => objOver.myId === obj.myId)
      if (findOverlay) {
        // await axios.delete(`http://localhost:3030/cart/${findOverlay.id}`)
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${findOverlay.id}`)
        props.setOverlayItems((over) => over.filter(o => o.myId !== obj.myId))
      } else {
        // const { data } = await axios.post(`http://localhost:3030/cart/${obj.id}`, obj)
        // const { data } = await axios.post('http://localhost:3030/cart', obj)
        const { data } = axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart', obj)
        props.setOverlayItems([...props.overlayItems, data])
      }
    } catch {
      alert('Ошибка добавления')
    }
  }

  const onAddFav = async (obj) => {
    try {
      const findFavorites = props.favorites.find(objFav => objFav.myId === obj.myId)
      if (findFavorites) {
        // await axios.delete(`http://localhost:3030/favorites/${findFavorites.id}`)
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/${findFavorites.id}`)
        props.setFavorites((over) => over.filter(o => o.myId !== obj.myId))
      } else {
        // const { data } = await axios.post(`http://localhost:3030/favorites/${obj.id}`, obj)
        // const { data } = await axios.post('http://localhost:3030/favorites', obj)
        const { data } = axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites', obj)
        props.setFavorites([...props.favorites, data])
      }
    } catch {
      alert('Ошибка добавления')
    }
  }

  return (
    <div className='container py-3'>
      {
        props.item.map(obj => {
          return (
            <Item
              key={obj.id}
              id={obj.id}
              myId={obj.myId}
              title={obj.title}
              description={obj.description}
              price={obj.price}
              img={obj.img}

              favBtn={(favObj) => { onAddFav(favObj) }}

              onPlus={(cartObj) => { onAddOverlay(cartObj) }}
            >
            </Item>)
        })
      }
    </div>
  );
}
export default CartItem;