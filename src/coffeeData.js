import React from 'react';

const coffeeData = {
  hot: [
    {
      name: 'Americano',
  image: '/Americano.webp',
      description: 'Espresso shot diluted with hot water.',
      ingredients: ['Espresso', 'Hot Water']
    },
    {
      name: 'Espresso',
  image: '/Espresso.jpg',
      description: 'A concentrated shot, base for most coffee drinks.',
      ingredients: ['Espresso']
    },
    {
      name: 'Mocha',
  image: '/Mocha.jpg',
      description: 'Espresso + steamed milk + chocolate.',
      ingredients: ['Espresso', 'Steamed Milk', 'Chocolate Syrup', 'Whipped Cream (optional)']
    },
    {
      name: 'Cappuccino',
  image: '/Cappuccino.jpg',
      description: 'Equal parts espresso, steamed milk, and milk foam.',
      ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam']
    },
    {
      name: 'Hot Chocolate',
  image: '/Hot_Chocolate.jpg',
      description: 'Chocolate and milk, cozy and energizing.',
      ingredients: ['Milk', 'Cocoa/Chocolate Syrup', 'Sugar (optional)', 'Whipped Cream (optional)']
    },
    {
      name: 'Chai Latte',
  image: '/Chai_Latte.jpg',
      description: 'Spiced tea with milk, ginger, and cardamom.',
      ingredients: ['Black Tea (Chai Blend)', 'Milk', 'Spices (Cinnamon, Ginger, Cardamom, Cloves)', 'Sweetener (optional)']
    },
    {
      name: 'Matcha Latte',
  image: '/Matcha_Latte.jpg',
      description: 'Green matcha tea with milk, lightly sweet.',
      ingredients: ['Matcha Powder', 'Milk', 'Sweetener (optional)']
    },
    {
      name: 'Seasonal Brew',
  image: '/Seasonal_Brew.jpg',
      description: 'Special blends with caramel, fruit, or chocolate tones.',
      ingredients: ['Brewed Coffee', 'Seasonal Syrup or Spices']
    },
    {
      name: 'Black Tea',
  image: '/Black_Tea.jpg',
      description: 'Classic Camellia leaves, sometimes fruit-flavored.',
      ingredients: ['Black Tea Leaves', 'Water']
    }
  ],
  cold: [
    {
      name: 'Iced Latte',
  image: '/Iced_Latte.jpg',
      description: 'Espresso and milk over ice.',
      ingredients: ['Espresso', 'Cold Milk', 'Ice', 'Syrup (optional)']
    },
    {
      name: 'Iced Mocha Latte',
  image: '/Iced_Mocha_Latte.jpg',
      description: 'Chilled latte with chocolate twist.',
      ingredients: ['Espresso', 'Cold Milk', 'Ice', 'Chocolate Syrup', 'Whipped Cream (optional)']
    },
    {
      name: 'Caramel Frappuccino',
  image: '/Caramel_Frappuccino.jpg',
      description: 'Blended iced coffee with caramel syrup and whipped cream.',
      ingredients: ['Coffee/Espresso', 'Ice', 'Milk', 'Caramel Syrup', 'Whipped Cream']
    },
    {
      name: 'Mocha Frappuccino',
  image: '/Mocha_Frappuccino.jpg',
      description: 'Blended iced coffee with chocolate syrup and whipped cream.',
      ingredients: ['Coffee/Espresso', 'Ice', 'Milk', 'Chocolate Syrup', 'Whipped Cream']
    },
    {
      name: 'Iced Espresso',
  image: '/Iced_Espresso.jpg',
      description: 'Espresso over ice, served straight or with milk/cream.',
      ingredients: ['Espresso', 'Ice', 'Sugar (optional)', 'Milk or Cream (optional)']
    },
    {
      name: 'Cold Brew',
  image: '/Cold_Brew.jpg',
      description: 'Long-steeped smooth coffee with ice.',
      ingredients: ['Coarsely Ground Coffee', 'Cold Water', 'Ice']
    },
    {
      name: 'Frappuccino',
  image: '/Frappuccino.jpg',
      description: 'Famous blended iced coffee with cream and syrup.',
      ingredients: ['Coffee/Espresso', 'Milk', 'Ice', 'Flavored Syrup', 'Whipped Cream']
    },
    {
      name: 'Mazagran',
  image: '/Mazagran.jpeg',
      description: 'Espresso with lemon, sugar, and optional rum.',
      ingredients: ['Espresso', 'Lemon Juice', 'Sugar', 'Ice', 'Rum (optional)']
    },
    {
      name: 'Banana Iced Coffee',
  image: '/Banana_Iced_Coffee.jpg',
      description: 'Coffee blended with banana and ice.',
      ingredients: ['Coffee', 'Banana', 'Ice', 'Milk or Yogurt (optional)', 'Honey (optional)']
    },
    {
      name: 'Apple Iced Coffee',
  image: '/Apple_Iced_Coffee.jpg',
      description: 'Coffee with apple and cinnamon notes.',
      ingredients: ['Coffee', 'Apple Juice or Purée', 'Cinnamon', 'Ice']
    },
    {
      name: 'Sprinkle Iced Coffee',
  image: '/Sprinkle_Iced_Coffee.jpg',
      description: 'Fun iced coffee topped with sprinkles, whipped cream, and foamed milk.',
      ingredients: ['Coffee', 'Milk (optional)', 'Ice', 'Whipped Cream', 'Sprinkles', 'Syrup (optional)']
    }
  ],
};

export default coffeeData;
