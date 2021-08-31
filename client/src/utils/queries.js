import { gql } from '@apollo/client';

export const QUERY_MENU_ITEM = gql`
  query getMenuItem($restaurant: ID) {
    menuItems(restaurant: $restaurant) {
      _id
      name
      description
      price
      quantity
      image
      restaurant {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($menuItems: [ID]!) {
    checkout(menuItems: $menuItems) {
      session
    }
  }
`;

export const QUERY_ALL_MENU_ITEMS = gql`
  {
    menuItems {
      _id
      name
      description
      price
      quantity
      restaurant {
        name
      }
    }
  }
`;

export const QUERY_RESTAURANT = gql`
  {
    restaurants {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        menuItems {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
