const db = require('./connection');
const { User, MenuItem, Restaurant } = require('../models');

db.once('open', async () => {
  await Restaurant.deleteMany();

  const restaurants = await Restaurant.insertMany([
    { image: 'alfredos-logo.png' },
    { image: 'guac-n-roll-logo.png' },
  ]);

  console.log('restaurants seeded');

  await MenuItem.deleteMany();

  const menuItems = await MenuItem.insertMany([
    {
      name: 'Nachos',
      description:
        'Chips with melted cheese, salsa, sour cream, guacamole, and your choice of meet',
      image: 'nachos.jpg',
      category: restaurants[1]._id,
      price: 15.99
    },
    {
      name: 'Quesadilla',
      description:
        'Cheese quesadilla with salsa and sour cream on the side',
      image: 'quesadillas.jpg',
      category: restaurants[1]._id,
      price: 7.49
    },
    {
      name: 'Burrito',
      category: restaurants[1]._id,
      description:
        'Mexican rice, black beans, salsa, sour cream, guacamole, cheese, and your choice of meat',
      image: 'burrito.jpg',
      price: 15.99
    },
    {
      name: 'Tacos',
      category: restaurants[1]._id,
      description:
        'Three authentic mexican tacos with your choice of meat',
      image: 'tacos.jpg',
      price: 14.49,
    },
    {
      name: 'Tamales',
      category: restaurants[1]._id,
      description:
        'Two of our special authenic made tamales!',
      image: 'tamales.jpg',
      price: 14.99,
    },
    {
      name: 'Horchata',
      category: restaurants[1]._id,
      description:
        'A traditional mexican beverage',
      image: 'horchata.jpg',
      price: 5.49,
    },
    {
      name: 'Jarritos',
      category: restaurants[1]._id,
      description:
        'Mexican Soda',
      image: 'jarritos.jpg',
      price: 2.49,
    },
    {
      name: 'Margarita',
      category: restaurants[1]._id,
      description:
        'Margarita with top-shelf tequila',
      image: 'margaritas.jpg',
      price: 11.99,
    },
    {
      name: 'Tres Leches Cake',
      category: restaurants[1]._id,
      description: 'Slice of Three Layered Cake',
      image: 'tres-leches.jpg',
      price: 7.49,
    },
    {
      name: 'Churros',
      category: restaurants[1]._id,
      description:
        '6 Mini Churros',
      image: 'churros.jpg',
      price: 3.49,
    },
    {
      name: 'Caramel Flan',
      category: restaurants[1]._id,
      description:
        'Custard dessert with a layer of caramel at the top',
      image: 'caramel-flan.jpg',
      price: 7.99,
    }
  ]);

  console.log('menu items seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        menuItems: [menuItems[0]._id, menuItems[0]._id, menuItems[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');
  process.exit();
});