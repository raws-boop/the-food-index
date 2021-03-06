const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Restaurant {
    _id: ID
    image: String
  }

  type MenuItem {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    restaurant: Restaurant
  }

  type Order {
    _id: ID
    purchaseDate: String
    menuItems: [MenuItem]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
   restaurants:[Restaurant]
    menuItems(restaurant: ID, name: String): [MenuItem]
    menuItem(_id: ID!): MenuItem
    user: User
    order(_id: ID!): Order
    checkout(menuItems: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(menuItems: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateMenuItem(_id: ID!, quantity: Int!): MenuItem
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
