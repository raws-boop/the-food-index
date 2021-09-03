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
    console.log("Menu Items", data)
    if (data) {
      dispatch({
        type: UPDATE_MENU_ITEMS,
        menuItems: data.menuItems,
      });
      data.menuItems.forEach((menuItem) => {
        idbPromise('menuItems', 'put', menuItem);
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
    console.log("current restaurant", currentRestaurant)
    if (!currentRestaurant) {
      return state.menuItems;
    }

    return state.menuItems.filter(
      (product) => product.restaurant._id === currentRestaurant
    );
  }

  return (
    <div className="my-2">
      <h2>Menu</h2>
      {state.menuItems?.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any menu items yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
