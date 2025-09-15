import React from 'react';

const coffeeData = {
  hot: [
    {
      name: 'Americano',
      image: '/americano.jpg',
      description: 'Espresso shot diluted with hot water.',
      ingredients: ['Espresso', 'Hot Water']
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
      ingredients: ['Espresso', 'Steamed Milk', 'Chocolate Syrup', 'Whipped Cream (optional)']
    },
    {
      name: 'Cappuccino',
      image: '/cappuccino.jpg',
      description: 'Equal parts espresso, steamed milk, and milk foam.',
      ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam']
    },
    {
      name: 'Hot Chocolate',
      image: '/hot chocolate.jpg',
      description: 'Chocolate and milk, cozy and energizing.',
      ingredients: ['Milk', 'Cocoa/Chocolate Syrup', 'Sugar (optional)', 'Whipped Cream (optional)']
    },
    {
      name: 'Chai Latte',
      image: '/chai latte.jpg',
      description: 'Spiced tea with milk, ginger, and cardamom.',
      ingredients: ['Black Tea (Chai Blend)', 'Milk', 'Spices (Cinnamon, Ginger, Cardamom, Cloves)', 'Sweetener (optional)']
    },
    {
      name: 'Matcha Latte',
      image: '/matcha latte.jpg',
      description: 'Green matcha tea with milk, lightly sweet.',
      ingredients: ['Matcha Powder', 'Milk', 'Sweetener (optional)']
    },
    {
      name: 'Seasonal Brew',
      image: '/seasonal brew.jpg',
      description: 'Special blends with caramel, fruit, or chocolate tones.',
      ingredients: ['Brewed Coffee', 'Seasonal Syrup or Spices']
    },
    {
      name: 'Black Tea',
      image: '/black tea.jpg',
      description: 'Classic Camellia leaves, sometimes fruit-flavored.',
      ingredients: ['Black Tea Leaves', 'Water']
    }
  ],
  cold: [
    {
      name: 'Iced Latte',
      image: '/iced latte.jpg',
      description: 'Espresso and milk over ice.',
      ingredients: ['Espresso', 'Cold Milk', 'Ice', 'Syrup (optional)']
    },
    {
      name: 'Iced Mocha Latte',
      image: '/iced mocha latte.jpg',
      description: 'Chilled latte with chocolate twist.',
      ingredients: ['Espresso', 'Cold Milk', 'Ice', 'Chocolate Syrup', 'Whipped Cream (optional)']
    },
    {
      name: 'Caramel Frappuccino',
      image: '/caramel frappuccino.jpg',
      description: 'Blended iced coffee with caramel syrup and whipped cream.',
      ingredients: ['Coffee/Espresso', 'Ice', 'Milk', 'Caramel Syrup', 'Whipped Cream']
    },
    {
      name: 'Mocha Frappuccino',
      image: '/mocha frappuccino.jpg',
      description: 'Blended iced coffee with chocolate syrup and whipped cream.',
      ingredients: ['Coffee/Espresso', 'Ice', 'Milk', 'Chocolate Syrup', 'Whipped Cream']
    },
    {
      name: 'Iced Espresso',
      image: '/iced espresso.jpg',
      description: 'Espresso over ice, served straight or with milk/cream.',
      ingredients: ['Espresso', 'Ice', 'Sugar (optional)', 'Milk or Cream (optional)']
    },
    {
      name: 'Cold Brew',
      image: '/cold brew.jpg',
      description: 'Long-steeped smooth coffee with ice.',
      ingredients: ['Coarsely Ground Coffee', 'Cold Water', 'Ice']
    },
    {
      name: 'Frappuccino',
      image: '/frappuccino.jpg',
      description: 'Famous blended iced coffee with cream and syrup.',
      ingredients: ['Coffee/Espresso', 'Milk', 'Ice', 'Flavored Syrup', 'Whipped Cream']
    },
    {
      name: 'Mazagran',
      image: '/mazagran.jpeg',
      description: 'Espresso with lemon, sugar, and optional rum.',
      ingredients: ['Espresso', 'Lemon Juice', 'Sugar', 'Ice', 'Rum (optional)']
    },
    {
      name: 'Banana Iced Coffee',
      image: '/banana iced coffee.jpg',
      description: 'Coffee blended with banana and ice.',
      ingredients: ['Coffee', 'Banana', 'Ice', 'Milk or Yogurt (optional)', 'Honey (optional)']
    },
    {
      name: 'Apple Iced Coffee',
      image: '/apple iced coffee.jpg',
      description: 'Coffee with apple and cinnamon notes.',
      ingredients: ['Coffee', 'Apple Juice or Purée', 'Cinnamon', 'Ice']
    },
    {
      name: 'Sprinkle Iced Coffee',
      image: '/sprinkle iced coffee.jpg',
      description: 'Fun iced coffee topped with sprinkles, whipped cream, and foamed milk.',
      ingredients: ['Coffee', 'Milk (optional)', 'Ice', 'Whipped Cream', 'Sprinkles', 'Syrup (optional)']
    }
  ],
};

export default coffeeData;
