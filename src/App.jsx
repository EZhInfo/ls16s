// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Favorites from './components/favorites/Favorites';
import Basket from './components/basket/Basket';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Home from './components/Home';
import Form from './components/Form';
import Description from './components/Description';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

export const AppContext = React.createContext({})

function App() {

    // хранение данных туров
    const [tours, setTours] = useState([])
    // хранение избранных
    const [favorites, setFavorites] = useState([])
    // хранение корзины
    const [overlayItems, setOverlayItems] = useState([])

    useEffect(() => {
        async function axiosData() {
            // const toursData = await axios.get('https://640b9ab1a3e07380e8e3ceb5.mockapi.io/tour');

            // const toursData = await axios.get('http://localhost:3030/tour');
            // const favoritesData = await axios.get('http://localhost:3030/favorites');
            // const cartData = await axios.get('http://localhost:3030/cart');
            const toursData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/tyrs');
            const favoritesData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites');
            const cartData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart');

            console.log(toursData.data);

            setTours(toursData.data);
            setFavorites(favoritesData.data);
            setOverlayItems(cartData.data);
        }

        axiosData();

        // fetch('https://640b9ab1a3e07380e8e3ceb5.mockapi.io/tour').then((myJSON) => {
        //   return myJSON.json();
        // }).then((myJSON) => {
        //   // console.log(myJSON);
        //   setTours(myJSON);
        // })
    }, [])

    const deleteItems = (id) => {
        // axios.delete(`http://localhost:3030/cart/${id}`)
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${id}`)
        setOverlayItems((objDelete) => objDelete.filter(item => item.id !== id))
    }

    const isAdded = (myId) => {
        return overlayItems.some((objIsAdded) => objIsAdded.myId === myId);
    }

    const isFav = (myId) => {
        return favorites.some((objIsFav) => objIsFav.myId === myId);
    }

    return (

        <AppContext.Provider
            value={
                {
                    tours,
                    setTours,
                    overlayItems,
                    setOverlayItems,
                    favorites,
                    setFavorites,
                    isAdded,
                    isFav
                }
            }>

            <div>

                <Router>
                    <Header></Header>

                    <Routes>
                        <Route
                            path='/favorites'
                            element={
                                <Favorites
                                    favorites={favorites}
                                    setFavorites={setFavorites}
                                    item={tours}
                                    overlayItems={overlayItems}
                                    setOverlayItems={setOverlayItems}
                                >
                                </Favorites>
                        }
                        >
                        </Route>

                        <Route
                            path='/'
                            element={
                                <Home
                                    item={tours}
                                    favorites={favorites}
                                    setFavorites={setFavorites}
                                    overlayItems={overlayItems}
                                    setOverlayItems={setOverlayItems}
                                >
                                </Home>}>
                        </Route>

                        <Route
                            path='/form'
                            element={
                                <Form>
                                </Form>}>
                        </Route>

                        <Route
                            path='/cart'
                            element={
                                <Basket
                                    totalPrice={
                                    overlayItems.reduce((element = overlayItems.length, obj)=>element + obj.price, 0)
                                    }
                                    overlayProp={overlayItems}
                                    deleteItems={deleteItems}
                                >
                                </Basket>}>
                        </Route>

                        <Route
                            path='/description'
                            element={
                            <Description
                            >

                            </Description>
                        }>
                        </Route>

                    </Routes>
                </Router>

                <Footer></Footer>

            </div>

        </AppContext.Provider>
    );
}

export default App;
