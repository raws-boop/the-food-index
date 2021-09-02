import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_RESTAURANTS,
  UPDATE_CURRENT_RESTAURANT,
} from '../../utils/actions';
import { QUERY_RESTAURANT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { restaurants } = state;

  const { loading, data: restaurantData } = useQuery(QUERY_RESTAURANT);

  useEffect(() => {
    console.log("Restaurant data", restaurantData)
    if (restaurantData) {
      dispatch({
        type: UPDATE_RESTAURANTS,
        restaurants: restaurantData.restaurants,
      });
      restaurantData.restaurants.forEach((restaurant) => {
        idbPromise('restaurants', 'put', restaurant);
      });
    } else if (!loading) {
      idbPromise('restaurants', 'get').then((restaurants) => {
        dispatch({
          type: UPDATE_RESTAURANTS,
          restaurants: restaurants,
        });
      });
    }
  }, [restaurantData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_RESTAURANT,
      currentRestaurant: id,
    });
  };

  return (
    <div>
      <h2>restaurants</h2>
      {restaurants?.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.image}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
