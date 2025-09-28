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
  image: '/Espresso.webp',
      description: 'A concentrated shot, base for most coffee drinks.',
      ingredients: ['Espresso']
    },
    {
      name: 'Mocha',
  image: '/Mocha.webp',
      description: 'Espresso + steamed milk + chocolate.',
      ingredients: ['Espresso', 'Steamed Milk', 'Chocolate Syrup', 'Whipped Cream (optional)']
    },
    {
      name: 'Cappuccino',
  image: '/Cappuccino.webp',
      description: 'Equal parts espresso, steamed milk, and milk foam.',
      ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam']
    },
    {
      name: 'Hot Chocolate',
  image: '/Hot_Chocolate.webp',
      description: 'Chocolate and milk, cozy and energizing.',
      ingredients: ['Milk', 'Cocoa/Chocolate Syrup', 'Sugar (optional)', 'Whipped Cream (optional)']
    },
    {
      name: 'Chai Latte',
  image: '/Chai_Latte.webp',
      description: 'Spiced tea with milk, ginger, and cardamom.',
      ingredients: ['Black Tea (Chai Blend)', 'Milk', 'Spices (Cinnamon, Ginger, Cardamom, Cloves)', 'Sweetener (optional)']
    },
    {
      name: 'Matcha Latte',
  image: '/Matcha_Latte.webp',
      description: 'Green matcha tea with milk, lightly sweet.',
      ingredients: ['Matcha Powder', 'Milk', 'Sweetener (optional)']
    },
    {
      name: 'Seasonal Brew',
  image: '/Seasonal_Brew.webp',
      description: 'Special blends with caramel, fruit, or chocolate tones.',
      ingredients: ['Brewed Coffee', 'Seasonal Syrup or Spices']
    },
    {
      name: 'Black Tea',
  image: '/Black_Tea.webp',
      description: 'Classic Camellia leaves, sometimes fruit-flavored.',
      ingredients: ['Black Tea Leaves', 'Water']
    }
  ],
  cold: [
    {
      name: 'Iced Latte',
  image: '/Iced_Latte.webp',
      description: 'Espresso and milk over ice.',
      ingredients: ['Espresso', 'Cold Milk', 'Ice', 'Syrup (optional)']
    },
    {
      name: 'Iced Mocha Latte',
  image: '/Iced_Mocha_Latte.webp',
      description: 'Chilled latte with chocolate twist.',
      ingredients: ['Espresso', 'Cold Milk', 'Ice', 'Chocolate Syrup', 'Whipped Cream (optional)']
    },
    {
      name: 'Caramel Frappuccino',
  image: '/Caramel_Frappuccino.webp',
      description: 'Blended iced coffee with caramel syrup and whipped cream.',
      ingredients: ['Coffee/Espresso', 'Ice', 'Milk', 'Caramel Syrup', 'Whipped Cream']
    },
    {
      name: 'Mocha Frappuccino',
  image: '/Mocha_Frappuccino.webp',
      description: 'Blended iced coffee with chocolate syrup and whipped cream.',
      ingredients: ['Coffee/Espresso', 'Ice', 'Milk', 'Chocolate Syrup', 'Whipped Cream']
    },
    {
      name: 'Iced Espresso',
  image: '/Iced_Espresso.webp',
      description: 'Espresso over ice, served straight or with milk/cream.',
      ingredients: ['Espresso', 'Ice', 'Sugar (optional)', 'Milk or Cream (optional)']
    },
    {
      name: 'Cold Brew',
  image: '/Cold_Brew.webp',
      description: 'Long-steeped smooth coffee with ice.',
      ingredients: ['Coarsely Ground Coffee', 'Cold Water', 'Ice']
    },
    {
      name: 'Frappuccino',
  image: '/Frappuccino.webp',
      description: 'Famous blended iced coffee with cream and syrup.',
      ingredients: ['Coffee/Espresso', 'Milk', 'Ice', 'Flavored Syrup', 'Whipped Cream']
    },
    {
      name: 'Mazagran',
  image: '/Mazagran.webp',
      description: 'Espresso with lemon, sugar, and optional rum.',
      ingredients: ['Espresso', 'Lemon Juice', 'Sugar', 'Ice', 'Rum (optional)']
    },
    {
      name: 'Banana Iced Coffee',
  image: '/Banana_Iced_Coffee.webp',
      description: 'Coffee blended with banana and ice.',
      ingredients: ['Coffee', 'Banana', 'Ice', 'Milk or Yogurt (optional)', 'Honey (optional)']
    },
    {
      name: 'Apple Iced Coffee',
  image: '/Apple_Iced_Coffee.webp',
      description: 'Coffee with apple and cinnamon notes.',
      ingredients: ['Coffee', 'Apple Juice or Purée', 'Cinnamon', 'Ice']
    },
    {
      name: 'Sprinkle Iced Coffee',
  image: '/Sprinkle_Iced_Coffee.webp',
      description: 'Fun iced coffee topped with sprinkles, whipped cream, and foamed milk.',
      ingredients: ['Coffee', 'Milk (optional)', 'Ice', 'Whipped Cream', 'Sprinkles', 'Syrup (optional)']
    }
  ],
};

export default coffeeData;
