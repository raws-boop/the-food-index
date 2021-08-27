const db = require('./connection');
const { User, MenuItem, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Appetizers' },
    { name: 'Entrees' },
    { name: 'Beverages' },
    { name: 'Desserts' }
  ]);

  console.log('categories seeded');

  await MenuItem.deleteMany();

  const menuItems = await MenuItem.insertMany([
    {
      name: 'Nachos',
      description:
        'Chips with melted cheese, salsa, sour cream, guacamole, and your choice of meet',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 15.99
    },
    {
      name: 'Chips & Salsa',
      description:
        'Our house-made tortilla chips along with our house-made salsa',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 6.99
    },
    {
      name: 'Quesadilla',
      description:
        'Cheese quesadilla with salsa and sour cream on the side',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 7.49
    },
    {
      name: 'Burrito',
      category: categories[1]._id,
      description:
        'Mexican rice, black beans, salsa, sour cream, guacamole, cheese, and your choice of meat',
      image: 'toilet-paper.jpg',
      price: 15.99
    },
    {
      name: 'Tacos',
      category: categories[1]._id,
      description:
        'Three authentic mexican tacos with your choice of meat',
      image: 'soap.jpg',
      price: 14.49,
    },
    {
      name: 'Fajitas',
      category: categories[1]._id,
      description:
        'Cooked peppers and onions and your choice of chicken or beef along with two tortillas',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Tamales',
      category: categories[1]._id,
      description:
        'Two of our special authenic made tamales!',
      image: 'wooden-spoons.jpg',
      price: 14.99,
    },
    {
      name: 'Horchata',
      category: categories[2]._id,
      description:
        'A traditional mexican beverage',
      image: 'camera.jpg',
      price: 5.49,
    },
    {
      name: 'Jarritos',
      category: categories[2]._id,
      description:
        'Mexican Soda',
      image: 'tablet.jpg',
      price: 2.49,
    },
    {
      name: 'Margarita',
      category: categories[2]._id,
      description:
        'Margarita with top-shelf tequila',
      image: 'bedtime-book.jpg',
      price: 11.99,
    },
    {
      name: 'Tres Leches Cake',
      category: categories[3]._id,
      description: 'Slice of Three Layered Cake',
      image: 'spinning-top.jpg',
      price: 7.49,
    },
    {
      name: 'Churros',
      category: categories[3]._id,
      description:
        '6 Mini Churros',
      image: 'plastic-horses.jpg',
      price: 3.49,
    },
    {
      name: 'Caramel Flan',
      category: categories[3]._id,
      description:
        'Custard dessert with a layer of caramel at the top',
      image: 'teddy-bear.jpg',
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