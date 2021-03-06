const db = require('./connection');
const { User, MenuItem, Restaurant } = require('../models');

db.once('open', async () => {
  await Restaurant.deleteMany();

  const restaurants = await Restaurant.insertMany([
    { image: "Guac n Roll" },
    { image: "Alfredo's"}
  ]);

  console.log('restaurants seeded');

  await MenuItem.deleteMany();

  const menuItems = await MenuItem.insertMany([
    {
      name: 'Nachos',
      description:
        'Chips with melted cheese, salsa, sour cream, guacamole, and your choice of meet',
      image: 'nachos.jpg',
      restaurant: restaurants[0]._id,
      price: 15.99
    },
    {
      name: 'Quesadilla',
      description:
        'Cheese quesadilla with salsa and sour cream on the side',
      image: 'quesadillas.jpg',
      restaurant: restaurants[0]._id,
      price: 7.49
    },
    {
      name: 'Burrito',
      restaurant: restaurants[0]._id,
      description:
        'Mexican rice, black beans, salsa, sour cream, guacamole, cheese, and your choice of meat',
      image: 'burritos.jpg',
      price: 15.99
    },
    {
      name: 'Tacos',
      restaurant: restaurants[0]._id,
      description:
        'Three authentic mexican tacos with your choice of meat',
      image: 'tacos.jpg',
      price: 14.49
    },
    {
      name: 'Tamales',
      restaurant: restaurants[0]._id,
      description:
        'Two of our special authenic made tamales!',
      image: 'tamales.jpg',
      price: 14.99
    },
    {
      name: 'Horchata',
      restaurant: restaurants[0]._id,
      description:
        'A traditional mexican beverage',
      image: 'horchata.jpg',
      price: 5.49
    },
    {
      name: 'Jarritos',
      restaurant: restaurants[0]._id,
      description:
        'Mexican Soda',
      image: 'jarritos.jpg',
      price: 2.49
    },
    {
      name: 'Margarita',
      restaurant: restaurants[0]._id,
      description:
        'Margarita with top-shelf tequila',
      image: 'margaritas.jpg',
      price: 11.99
    },
    {
      name: 'Tres Leches Cake',
      restaurant: restaurants[0]._id,
      description: 'Slice of Three Layered Cake',
      image: 'tres-leches.jpg',
      price: 7.49
    },
    {
      name: 'Churros',
      restaurant: restaurants[0]._id,
      description:
        '6 Mini Churros',
      image: 'churros.jpg',
      price: 3.49
    },
    {
      name: 'Caramel Flan',
      restaurant: restaurants[0]._id,
      description:
        'Custard dessert with a layer of caramel at the top',
      image: 'caramel-flan.jpg',
      price: 7.99
    },
    {
      name: 'Bruschetta',
      restaurant: restaurants[1]._id,
      description:
        'Grilled bread with some fresh toppings',
      image: 'bruschetta.jpg',
      price: 7.99
    },
    {
      name: 'Caprese Salad',
      restaurant: restaurants[1]._id,
      description:
        'A classic and simple Italian salad',
      image: 'caprese-salad.jpg',
      price: 6.99
    },
    {
      name: 'Arancini',
      restaurant: restaurants[1]._id,
      description:
        'Deep fried rice balls stuffed with cheese',
      image: 'aracini.jpg',
      price: 7.99
    },
    {
      name: 'Lasagna',
      restaurant: restaurants[1]._id,
      description:
        'Layers of pasta with meat and cheese in between',
      image: 'lasagna.jpg',
      price: 15.99
    },
    {
      name: 'Spaghetti',
      restaurant: restaurants[1]._id,
      description:
        'Classic pasta dish with marinara sauce with your choice to add meatballs',
      image: 'spaghetti.jpg',
      price: 13.99
    },
    {
      name: 'Carbonara',
      restaurant: restaurants[1]._id,
      description:
        'Pasta with a white sauce and bacon',
      image: 'carbonara.jpg',
      price: 12.99
    },
    {
      name: 'Espresso',
      restaurant: restaurants[1]._id,
      description:
        'Coffee made the italian way',
      image: 'espresso.jpg',
      price: 3.99
    },
    {
      name: 'Campari',
      restaurant: restaurants[1]._id,
      description: 
        'A tasty Italian alcoholic drink',
      image: 'campari.jpg',
      price: 5.99
    },
    {
      name: 'Bellini',
      restaurant: restaurants[1]._id,
      description:
        'A peach flavored cocktail',
      image: 'bellini.jpg',
      price: 11.99
    },
    {
      name: 'Tiramisu',
      restaurant: restaurants[1]._id,
      description:
        'Yummy coffee flavored cake',
      image: 'tiramisu.jpg',
      price: 7.99
    },
    {
      name: 'Cannoli',
      restaurant: restaurants[1]._id,
      description:
        'Tasty Italian pastry',
      image: 'cannoli.jpg',
      price: 7.99
    },
    {
      name: 'Gelato',
      restaurant: restaurants[1]._id,
      description:
        'An Italian take on ice cream',
      image: 'gelato.jpg',
      price: 7.99
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