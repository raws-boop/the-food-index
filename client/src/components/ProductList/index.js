import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_MENU_ITEMS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_MENU_ITEM} from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentRestaurant } = state;

  const { loading, data } = useQuery(QUERY_MENU_ITEM);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_MENU_ITEMS,
        menuItems: data.menuItems,
      });
      data.menuItems.forEach((menuItem) => {
        idbPromise('products', 'put', menuItem);
      });
    } else if (!loading) {
      idbPromise('menuItems', 'get').then((menuItems) => {
        dispatch({
          type: UPDATE_MENU_ITEMS,
          menuItems: menuItems,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentRestaurant) {
      return state.menuItems;
    }

    return state.menuItems.filter(
      (product) => product.category._id === currentRestaurant
    );
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.menuItems.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any menuItems yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
