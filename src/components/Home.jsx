import React from 'react';
import Slider from './Slider';
import CartItem from './cart/CartItem';

const Home = (props) => {
  return (
    <div>
      <Slider></Slider>
      <CartItem
        item={props.item}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
        overlayItems={props.overlayItems}
        setOverlayItems={props.setOverlayItems}
      >
      </CartItem>
    </div>
  )
}

export default Home