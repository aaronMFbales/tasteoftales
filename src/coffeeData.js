import React from 'react';

const coffeeData = {
  hot: [
    {
      name: 'Americano',
  image: '/americano.jpg',
      description: 'Espresso shot diluted with hot water.',
      ingredients: ['Espresso', 'Hot water']
    },
    {
      name: 'Espresso',
  image: '/espresso.jpg',
      description: 'A concentrated shot, base for most coffee drinks.',
      ingredients: ['Espresso']
    },
    {
      name: 'Mocha',
  image: '/mocha.jpg',
      description: 'Espresso + steamed milk + chocolate.',
      ingredients: ['Espresso', 'Steamed milk', 'Chocolate']
    },
    {
      name: 'Cappuccino',
  image: '/cappuccino.jpg',
      description: 'Equal parts espresso, steamed milk, and milk foam.',
      ingredients: ['Espresso', 'Steamed milk', 'Milk foam']
    },
    {
      name: 'Hot Chocolate',
  image: '/hot chocolate.jpg',
      description: 'Chocolate and milk, cozy and energizing.',
      ingredients: ['Chocolate', 'Milk']
    },
    {
      name: 'Chai Latte',
  image: '/chai latte.jpg',
      description: 'Spiced tea with milk, ginger, and cardamom.',
      ingredients: ['Tea', 'Milk', 'Ginger', 'Cardamom']
    },
    {
      name: 'Matcha Latte',
  image: '/matcha latte.jpg',
      description: 'Green matcha tea with milk, lightly sweet.',
      ingredients: ['Matcha powder', 'Milk', 'Sugar (optional)']
    },
    {
      name: 'Seasonal Brew',
  image: '/seasonal brew.jpg',
      description: 'Special blends with caramel, fruit, or chocolate tones.',
      ingredients: ['Coffee']
    },
    {
      name: 'Black Tea',
  image: '/black tea.jpg',
      description: 'Classic Camellia leaves, sometimes fruit-flavored.',
      ingredients: ['Tea']
    }
  ],
  cold: [
    {
      name: 'Iced Latte',
      image: '/iced latte.jpg',
      description: 'Espresso and milk over ice.',
      ingredients: ['Espresso', 'Milk', 'Ice', 'Syrup']
    },
    {
      name: 'Iced Mocha Latte',
      image: '/iced mocha latte.jpg',
      description: 'Chilled latte with chocolate twist.',
      ingredients: ['Espresso', 'Ice', 'Milk', 'Chocolate']
    },
    {
      name: 'Caramel Frappuccino style',
      image: '/caramel frappuccino.jpg',
      description: 'Blended iced coffee with caramel syrup and whipped cream.',
      ingredients: ['Coffee', 'Ice', 'Milk', 'Caramel syrup', 'Whipped cream']
    },
    {
      name: 'Mocha Frappuccino style',
      image: '/mocha frappuccino.jpg',
      description: 'Blended iced coffee with chocolate syrup and whipped cream.',
      ingredients: ['Coffee', 'Ice', 'Milk', 'Chocolate syrup', 'Whipped cream']
    },
    {
      name: 'Iced Espresso',
      image: '/iced espresso.jpg',
      description: 'Espresso over ice, served straight or with milk/cream.',
      ingredients: ['Espresso', 'Ice', 'Sugar (optional)', 'Cream (optional)']
    },
    {
      name: 'Cold Brew',
      image: '/cold brew.jpg',
      description: 'Long-steeped smooth coffee with ice.',
      ingredients: ['Coffee (steeped)', 'Ice']
    },
    {
      name: 'Frappuccino',
      image: '/frappuccino.jpg',
      description: 'Famous blended iced coffee with cream and syrup.',
      ingredients: ['Espresso', 'Blended ice', 'Whipped cream']
    },
    {
      name: 'Mazagran',
      image: '/mazagran.jpeg',
      description: 'Espresso with lemon, sugar, and optional rum.',
      ingredients: ['Coffee', 'Sugar', 'Lemon', 'Rum (optional)']
    },
    {
      name: 'Banana Iced Coffee',
      image: '/banana iced coffee.jpg',
      description: 'Coffee blended with banana and ice.',
      ingredients: ['Coffee', 'Banana', 'Ice']
    },
    {
      name: 'Apple Iced Coffee',
      image: '/apple iced coffee.jpg',
      description: 'Coffee with apple and cinnamon notes.',
      ingredients: ['Coffee', 'Apple', 'Cinnamon', 'Ice']
    },
    {
      name: 'Sprinkle Iced Coffee',
      image: '/sprinkle iced coffee.jpg',
      description: 'Fun iced coffee topped with sprinkles, whipped cream, and foamed milk.',
      ingredients: ['Coffee', 'Sprinkles', 'Ice', 'Whipped cream', 'Foamed milk']
    }
  ],
};

export default coffeeData;
