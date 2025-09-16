// SCA Coffee Taster's Flavor Wheel data (detailed, with color coding)
export const coffeeFlavorData = [
  {
    name: "Fruity",
    itemStyle: { color: "#F44336" },
    children: [
      {
        name: "Berry",
        itemStyle: { color: "#9C27B0" },
        children: [
          { name: "Blackberry", itemStyle: { color: "#7B1FA2" } },
          { name: "Raspberry", itemStyle: { color: "#E040FB" } },
          { name: "Blueberry", itemStyle: { color: "#2196F3" } },
          { name: "Strawberry", itemStyle: { color: "#F06292" } }
        ]
      },
      {
        name: "Dried fruit",
        itemStyle: { color: "#FF9800" },
        children: [
          { name: "Raisin", itemStyle: { color: "#8D6E63" } },
          { name: "Prune", itemStyle: { color: "#6D4C41" } }
        ]
      },
      {
        name: "Other fruit",
        itemStyle: { color: "#FFB300" },
        children: [
          { name: "Pomegranate", itemStyle: { color: "#E91E63" } },
          { name: "Pineapple", itemStyle: { color: "#FFEB3B" } },
          { name: "Grape", itemStyle: { color: "#7CB342" } },
          { name: "Apple", itemStyle: { color: "#AED581" } },
          { name: "Peach", itemStyle: { color: "#FF7043" } },
          { name: "Pear", itemStyle: { color: "#C5E1A5" } },
          { name: "Cherry", itemStyle: { color: "#D50000" } },
          { name: "Coconut", itemStyle: { color: "#BCAAA4" } }
        ]
      },
      {
        name: "Citrus fruit",
        itemStyle: { color: "#FFEB3B" },
        children: [
          { name: "Grapefruit", itemStyle: { color: "#FF8A65" } },
          { name: "Orange", itemStyle: { color: "#FF9800" } },
          { name: "Lemon", itemStyle: { color: "#FFF176" } },
          { name: "Lime", itemStyle: { color: "#C0CA33" } }
        ]
      }
    ]
  },
  {
    name: "Floral",
    itemStyle: { color: "#E91E63" },
    children: [
      { name: "Black Tea", itemStyle: { color: "#6D4C41" } },
      { name: "Floral", itemStyle: { color: "#F8BBD0" }, children: [
        { name: "Jasmine", itemStyle: { color: "#BA68C8" } },
        { name: "Rose", itemStyle: { color: "#F06292" } },
        { name: "Chamomile", itemStyle: { color: "#FFF9C4" } }
      ] }
    ]
  },
  {
    name: "Sweet",
    itemStyle: { color: "#FFB300" },
    children: [
      { name: "Brown Sugar", itemStyle: { color: "#F9A825" } },
      { name: "Vanilla", itemStyle: { color: "#FFF8E1" } },
      { name: "Maple Syrup", itemStyle: { color: "#A1887F" } },
      { name: "Honey", itemStyle: { color: "#FFD54F" } },
      { name: "Caramelized", itemStyle: { color: "#FFB74D" } }
    ]
  },
  {
    name: "Nutty / Cocoa",
    itemStyle: { color: "#795548" },
    children: [
      { name: "Nutty", itemStyle: { color: "#A1887F" }, children: [
        { name: "Almond", itemStyle: { color: "#D7CCC8" } },
        { name: "Hazelnut", itemStyle: { color: "#8D6E63" } },
        { name: "Peanut", itemStyle: { color: "#FFD54F" } }
      ] },
      { name: "Cocoa", itemStyle: { color: "#4E342E" }, children: [
        { name: "Chocolate", itemStyle: { color: "#6D4C41" } },
        { name: "Dark Chocolate", itemStyle: { color: "#3E2723" } }
      ] }
    ]
  },
  {
    name: "Spices",
    itemStyle: { color: "#D4A373" },
    children: [
      { name: "Brown Spice", itemStyle: { color: "#A0521C" }, children: [
        { name: "Clove", itemStyle: { color: "#8D6E63" } },
        { name: "Cinnamon", itemStyle: { color: "#D2691E" } },
        { name: "Nutmeg", itemStyle: { color: "#C0A16B" } },
        { name: "Anise", itemStyle: { color: "#F5E6D6" } }
      ] },
      { name: "Pepper", itemStyle: { color: "#BDB76B" } },
      { name: "Pungent", itemStyle: { color: "#B8860B" } }
    ]
  },
  {
    name: "Roasted",
    itemStyle: { color: "#8D6E63" },
    children: [
      { name: "Cereal", itemStyle: { color: "#FFF8E1" }, children: [
        { name: "Malt", itemStyle: { color: "#FFD54F" } },
        { name: "Grain", itemStyle: { color: "#FFF9C4" } }
      ] },
      { name: "Brown Roast", itemStyle: { color: "#A0521C" } },
      { name: "Smoky", itemStyle: { color: "#616161" } },
      { name: "Ashy", itemStyle: { color: "#212121" } },
      { name: "Burnt", itemStyle: { color: "#3E2723" } }
    ]
  },
  {
    name: "Green / Vegetative",
    itemStyle: { color: "#388E3C" },
    children: [
      { name: "Olive Oil", itemStyle: { color: "#B2FF59" } },
      { name: "Raw", itemStyle: { color: "#C5E1A5" } },
      { name: "Green / Vegetative", itemStyle: { color: "#66BB6A" }, children: [
        { name: "Under-ripe", itemStyle: { color: "#AED581" } },
        { name: "Peapod", itemStyle: { color: "#C5E1A5" } },
        { name: "Fresh", itemStyle: { color: "#81C784" } },
        { name: "Dark Green", itemStyle: { color: "#388E3C" } },
        { name: "Vegetative", itemStyle: { color: "#43A047" } }
      ] }
    ]
  },
  {
    name: "Sour / Fermented",
    itemStyle: { color: "#FBC02D" },
    children: [
      { name: "Sour", itemStyle: { color: "#FFF176" }, children: [
        { name: "Acetic Acid", itemStyle: { color: "#FFD54F" } },
        { name: "Butyric Acid", itemStyle: { color: "#FFF9C4" } },
        { name: "Isovaleric Acid", itemStyle: { color: "#FBC02D" } },
        { name: "Citric Acid", itemStyle: { color: "#FFEB3B" } },
        { name: "Malic Acid", itemStyle: { color: "#AED581" } }
      ] },
      { name: "Alcohol / Fermented", itemStyle: { color: "#BCAAA4" }, children: [
        { name: "Winey", itemStyle: { color: "#8E24AA" } },
        { name: "Whiskey", itemStyle: { color: "#B8860B" } },
        { name: "Fermented", itemStyle: { color: "#BCAAA4" } },
        { name: "Overripe", itemStyle: { color: "#F44336" } }
      ] }
    ]
  },
  {
    name: "Other",
    itemStyle: { color: "#90A4AE" },
    children: [
      { name: "Papery / Musty", itemStyle: { color: "#B0BEC5" }, children: [
        { name: "Stale", itemStyle: { color: "#CFD8DC" } },
        { name: "Cardboard", itemStyle: { color: "#BCAAA4" } },
        { name: "Papery", itemStyle: { color: "#F5E6D6" } }
      ] },
      { name: "Chemical", itemStyle: { color: "#B0BEC5" }, children: [
        { name: "Medicinal", itemStyle: { color: "#90A4AE" } },
        { name: "Petroleum", itemStyle: { color: "#78909C" } },
        { name: "Rubber", itemStyle: { color: "#616161" } },
        { name: "Skunky", itemStyle: { color: "#212121" } }
      ] }
    ]
  }
];
