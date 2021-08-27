const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type MenuItem {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
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
    categories: [Category]
    products(category: ID, name: String): [MenuItem]
    product(_id: ID!): MenuItem
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(menuItems: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateMenuItems(_id: ID!, quantity: Int!): MenuItems
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
