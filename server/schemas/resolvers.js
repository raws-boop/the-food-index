const { AuthenticationError } = require('apollo-server-express');
const { User, MenuItem, Restaurant, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    restaurants: async () => {
      return await Restaurant.find();
    },
    menuItems: async (parent, { restaurant, name }) => {
      const params = {};

      if (restaurant) {
        params.restaurant = restaurant;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await MenuItem.find(params).populate('restaurant');
    },
    menuItem: async (parent, { _id }) => {
      return await MenuItem.findById(_id).populate('restaurant');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.menuItems',
          populate: 'restaurant'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.menuItems',
          populate: 'restaurant'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ menuItems: args.menuItems });
      const line_items = [];

      const { menuItems } = await order.populate('menuItems').execPopulate();

      for (let i = 0; i < menuItems.length; i++) {
        const menuItem = await stripe.menuItems.create({
          name: menuItems[i].name,
          description: menuItems[i].description,
          images: [`${url}/images/${menuItems[i].image}`]
        });

        const price = await stripe.prices.create({
          menuItem: menuItem.id,
          unit_amount: menuItems[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { menuItems }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ menuItems });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateMenuItem: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await MenuItem.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
