import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_MENU_ITEMS,
} from '../utils/actions';
import { QUERY_MENU_ITEM} from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentMenuItem, setCurrentMenuItem] = useState({});

  const { loading, data } = useQuery(QUERY_MENU_ITEM);

  const { menuItems, cart } = state;

  useEffect(() => {
    // already in global store
    if (menuItems.length) {
      setCurrentMenuItem(menuItems.find((MenuItem) => MenuItem._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_MENU_ITEMS,
        menuItems: data.menuItems,
      });

      data.menuItems.forEach((MenuItem) => {
        idbPromise('menuItems', 'put', MenuItem);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('menuItems', 'get').then((indexedMenuItems) => {
        dispatch({
          type: UPDATE_MENU_ITEMS,
          menuItems: indexedMenuItems,
        });
      });
    }
  }, [menuItems, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        MenuItem: { ...currentMenuItem, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentMenuItem, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentMenuItem._id,
    });

    idbPromise('cart', 'delete', { ...currentMenuItem });
  };

  return (
    <>
      {currentMenuItem && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Menu</Link>

          <h2>{currentMenuItem.name}</h2>

          <p>{currentMenuItem.description}</p>

          <p>
            <strong>Price:</strong>${currentMenuItem.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentMenuItem._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentMenuItem.image}`}
            alt={currentMenuItem.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
