// SCA Coffee Taster's Flavor Wheel data (detailed, with color coding)
export const coffeeFlavorData = [
  {
    name: "Fruity",
    description: "Sweet, refreshing notes of fresh or cooked fruit.",
    itemStyle: { color: "#F44336" },
    children: [
      {
        name: "Berry",
        description: "Sweet-tart red or blue berries.",
        itemStyle: { color: "#9C27B0" },
        children: [
          { name: "Blackberry", description: "Sweet dark berry.", itemStyle: { color: "#7B1FA2" } },
          { name: "Raspberry", description: "Tart red berry.", itemStyle: { color: "#E040FB" } },
          { name: "Blueberry", description: "Mild, sweet berry.", itemStyle: { color: "#2196F3" } },
          { name: "Strawberry", description: "Juicy red berry.", itemStyle: { color: "#F06292" } }
        ]
      },
      {
        name: "Dried fruit",
        description: "Raisin, date, or prune-like sweetness.",
        itemStyle: { color: "#FF9800" },
        children: [
          { name: "Raisin", description: "Dried grape sweetness.", itemStyle: { color: "#8D6E63" } },
          { name: "Prune", description: "Dried plum richness.", itemStyle: { color: "#6D4C41" } }
        ]
      },
      {
        name: "Other fruit",
        description: "Non-citrus fruits (apple, pear, peach).",
        itemStyle: { color: "#FFB300" },
        children: [
          { name: "Pomegranate", description: "Tart-sweet seeds.", itemStyle: { color: "#E91E63" } },
          { name: "Pineapple", description: "Tropical acidity.", itemStyle: { color: "#FFEB3B" } },
          { name: "Grape", description: "Classic grape aroma.", itemStyle: { color: "#7CB342" } },
          { name: "Apple", description: "Crisp apple note.", itemStyle: { color: "#AED581" } },
          { name: "Peach", description: "Juicy stone fruit.", itemStyle: { color: "#FF7043" } },
          { name: "Pear", description: "Mild, soft fruit.", itemStyle: { color: "#C5E1A5" } },
          { name: "Cherry", description: "Bright cherry tone.", itemStyle: { color: "#D50000" } },
          { name: "Coconut", description: "Sweet coconut.", itemStyle: { color: "#BCAAA4" } }
        ]
      },
      {
        name: "Citrus fruit",
        description: "Lemon, orange, lime, bright acidity.",
        itemStyle: { color: "#FFEB3B" },
        children: [
          { name: "Grapefruit", description: "Bitter-tart citrus.", itemStyle: { color: "#FF8A65" } },
          { name: "Orange", description: "Sweet orange peel.", itemStyle: { color: "#FF9800" } },
          { name: "Lemon", description: "Zesty lemon.", itemStyle: { color: "#FFF176" } },
          { name: "Lime", description: "Tart lime.", itemStyle: { color: "#C0CA33" } }
        ]
      }
    ]
  },
  {
    name: "Floral",
    description: "Aromas similar to flowers, light and fragrant.",
    itemStyle: { color: "#E91E63" },
    children: [
  { name: "Black Tea", description: "Smooth, tannic tea-like notes.", itemStyle: { color: "#6D4C41" }, value: 3 },
      { name: "Floral", description: "Light, fragrant floral notes.", itemStyle: { color: "#F8BBD0" }, children: [
        { name: "Jasmine", description: "Sweet white blossom.", itemStyle: { color: "#BA68C8" } },
        { name: "Rose", description: "Perfumed rose petals.", itemStyle: { color: "#F06292" } },
        { name: "Chamomile", description: "Mild herbal floral.", itemStyle: { color: "#FFF9C4" } }
      ] },
      {
        name: "Sweet",
        description: "Overall sugary tones: honey, caramel, or candy-like sweetness.",
        itemStyle: { color: "#FFB300" },
        children: [
          { name: "Brown Sugar", description: "Rich, molasses-like sweetness.", itemStyle: { color: "#F9A825" } },
          { name: "Vanilla", description: "Sweet, creamy vanilla aroma.", itemStyle: { color: "#FFF8E1" } },
          { name: "Maple Syrup", description: "Sweet, woody maple note.", itemStyle: { color: "#A1887F" } },
          { name: "Honey", description: "Floral, golden honey sweetness.", itemStyle: { color: "#FFD54F" } },
          { name: "Caramelized", description: "Toasty, caramelized sugar flavor.", itemStyle: { color: "#FFB74D" } }
        ]
      },
    ]
  },
  {
    name: "Nutty / Cocoa",
    description: "Nutty and chocolate-like flavors, ranging from sweet nuts to rich cocoa.",
    itemStyle: { color: "#795548" },
    children: [
      { name: "Nutty", description: "Toasted nuts (almond, hazelnut, peanut), often sweet and rich.", itemStyle: { color: "#A1887F" }, children: [
        { name: "Almond", description: "Delicate, sweet almond note.", itemStyle: { color: "#D7CCC8" } },
        { name: "Hazelnut", description: "Rich, roasted hazelnut flavor.", itemStyle: { color: "#8D6E63" } },
        { name: "Peanut", description: "Earthy, nutty peanut flavor.", itemStyle: { color: "#FFD54F" } }
      ] },
      { name: "Cocoa", description: "Pure chocolate or cocoa-powder aroma, sometimes dry and dusty.", itemStyle: { color: "#4E342E" }, children: [
        { name: "Chocolate", description: "Sweet, creamy cocoa notes.", itemStyle: { color: "#6D4C41" } },
        { name: "Dark Chocolate", description: "Rich, bittersweet chocolate.", itemStyle: { color: "#3E2723" } }
      ] }
    ]
  },
  {
    name: "Spices",
    description: "Aromatic and pungent notes reminiscent of various spices.",
    itemStyle: { color: "#D4A373" },
    children: [
      { name: "Brown Spice", description: "Warm baking spices such as cinnamon, clove, nutmeg, or allspice.", itemStyle: { color: "#A0521C" }, children: [
        { name: "Clove", description: "Warm, spicy clove aroma.", itemStyle: { color: "#8D6E63" } },
        { name: "Cinnamon", description: "Sweet, woody cinnamon spice.", itemStyle: { color: "#D2691E" } },
        { name: "Nutmeg", description: "Nutty, aromatic nutmeg.", itemStyle: { color: "#C0A16B" } },
        { name: "Anise", description: "Sweet, licorice-like spice.", itemStyle: { color: "#F5E6D6" } }
      ] },
  { name: "Pepper", description: "Sharp, spicy pepper note.", itemStyle: { color: "#BDB76B" } },
  { name: "Pungent", description: "Strong, intense aroma.", itemStyle: { color: "#B8860B" } }
    ]
  },
  {
    name: "Roasted",
    description: "Flavors developed during roasting, from cereal-like to smoky and burnt notes.",
    itemStyle: { color: "#8D6E63" },
    children: [
      { name: "Cereal",  description: "Grain-based aromas like malt, oats, or breakfast cereals.", itemStyle: { color: "#cfcfcfff" }, children: [
        { name: "Malt", description: "Sweet, toasted malt flavor.", itemStyle: { color: "#FFD54F" } },
        { name: "Grain", description: "Dry, cereal-like grain note.", itemStyle: { color: "#FFF9C4" } }
      ] },
  { name: "Brown Roast", description: "Rich, roasted coffee aroma.", itemStyle: { color: "#A0521C" } },
  { name: "Smoky", description: "Smoky, fire-roasted note.", itemStyle: { color: "#616161" } },
  { name: "Ashy", description: "Dry, ashy aftertaste.", itemStyle: { color: "#212121" } },
  { name: "Burnt", description: "Charred, burnt flavor.", itemStyle: { color: "#3E2723" } }
    ]
  },
  {
    name: "Green / Vegetative",
    description: "Fresh, raw, and plant-like flavors, often associated with underdeveloped beans.",
    itemStyle: { color: "#388E3C" },
    children: [
      { name: "Olive Oil", description: "Mild oily/olive aroma.", itemStyle: { color: "#B2FF59" }, value: 1.3 },
      { name: "Raw", description: "Unprocessed, green raw note.", itemStyle: { color: "#C5E1A5" } },
  { name: "Vegetative Notes",
    description: "Raw plant or leafy aromas: grass, stems, peapods, or spinach.",
     itemStyle: { color: "#66BB6A" }, children: [
    { name: "Under-ripe", itemStyle: { color: "#AED581" } },
    { name: "Peapod", description: "Green, vegetal peapod note.", itemStyle: { color: "#C5E1A5" } },
    { name: "Fresh", description: "Bright, fresh green aroma.", itemStyle: { color: "#81C784" } },
    { name: "Dark Green", description: "Deep, leafy green note.", itemStyle: { color: "#388E3C" } },
    { name: "Vegetative", description: "General green, plant-like aroma.", itemStyle: { color: "#43A047" } }
      ] }
    ]
  },
  {
    name: "Sour / Fermented",
    description: "Tangy, acidic, and fermented notes, ranging from pleasant sourness to overripe and alcoholic.",
    itemStyle: { color: "#FBC02D" },
    children: [
      { name: "Sour",
         description: "Tangy, acidic brightness; reminiscent of lemon juice or sharp yogurt.",
         itemStyle: { color: "#FFF176" },
        children: [
        { name: "Acetic Acid", description: "Sharp, vinegary sourness.", itemStyle: { color: "#FFD54F" } },
        { name: "Butyric Acid", description: "Tangy, buttery sour note.", itemStyle: { color: "#FFF9C4" } },
        { name: "Isovaleric Acid", description: "Pungent, cheesy sourness.", itemStyle: { color: "#FBC02D" } },
        { name: "Citric Acid", description: "Bright, citrus-like acidity.", itemStyle: { color: "#FFEB3B" } },
        { name: "Malic Acid", description: "Apple-like tartness.", itemStyle: { color: "#AED581" } }
      ] },
      { name: "Alcohol / Fermented",
          description: "Notes of wine, beer, or spirits; can include pleasant barrel character or off-fermented sourness.",
         itemStyle: { color: "#BCAAA4" },
          children: [
        { name: "Winey", description: "Fruity, wine-like aroma.", itemStyle: { color: "#8E24AA" } },
        { name: "Whiskey", description: "Spirited, whiskey-like note.", itemStyle: { color: "#B8860B" } },
        { name: "Fermented", description: "Yeasty, fermented aroma.", itemStyle: { color: "#BCAAA4" } },
        { name: "Overripe", description: "Heavy, overripe fruit note.", itemStyle: { color: "#F44336" } }
      ] }
    ]
  },
  {
    name: "Other",
    description: "Uncommon or undesirable flavors, such as papery, musty, or chemical notes.",
    itemStyle: { color: "#90A4AE" },
    children: [
      { name: "Papery / Musty",
         description: "Stale paper, wet cardboard, or dusty storage odors caused by age or poor packaging.",
         itemStyle: { color: "#B0BEC5" },
          children: [
        { name: "Stale", description: "Flat, old coffee aroma.", itemStyle: { color: "#CFD8DC" } },
        { name: "Cardboard", description: "Dry, cardboard-like note.", itemStyle: { color: "#BCAAA4" } },
        { name: "Papery", description: "Thin, paper-like aroma.", itemStyle: { color: "#F5E6D6" } }
      ] },
      { name: "Chemical",
        description: "Sharp, synthetic or solvent-like tones such as cleaning agents, plastic, or artificial aroma.",
         itemStyle: { color: "#B0BEC5" }, 
      children: [
        { name: "Medicinal", description: "Pharmaceutical, medicinal aroma.", itemStyle: { color: "#90A4AE" } },
        { name: "Petroleum", description: "Oily, petroleum-like note.", itemStyle: { color: "#78909C" } },
        { name: "Rubber", description: "Rubbery, synthetic aroma.", itemStyle: { color: "#616161" } },
        { name: "Skunky", description: "Strong, skunky off-note.", itemStyle: { color: "#212121" } }
      ] }
    ]
  }
]
