let productsDataBase = [
  {
    id: 1,
    imgUrl: "images/1.jpg",
    title: "Black & Decker",
    description:
      "Air Fryer, 5.8L , 1800W, Touch Screen, 12-in-1 With Rapid Hot Air Circulation For Frying",
    price: 9870,
    qty: 1,
  },

  {
    id: 2,
    imgUrl: "images/2.jpg",
    title: "Black & White",
    description:
      "Kettle Electric Water Boiler KS-400 Glass, 2 Liters, 2200 Watt, Silver",
    price: 725,
    qty: 1,
  },
  {
    id: 3,
    imgUrl: "images/3.jpg",
    title: "Tornado",
    description:
      "Automatic turkish coffee maker 330ml, 735 watt, red x black tcme-100 rg",
    price: 2770,
    qty: 1,
  },
  {
    id: 4,
    imgUrl: "images/4.jpg",
    title: "Black & Decker",
    description: "1500W Handheld Handy Garment Steamer, Purple - HST1500-B5",
    price: 2500,
    qty: 1,
  },

  {
    id: 5,
    imgUrl: "images/5.jpg",
    title: "NESPRESSO",
    description: "Black Coffee Machine - 20 free coffee capsules",
    price: 7700,
    qty: 1,
    like: true,
  },

  {
    id: 6,
    imgUrl: "images/6.jpg",
    title: "Xiaomi",
    description:
      "mi bhr4857hk oled display smart air fryer, 3.5l - white - 220v supply voltage and 50hz",
    price: 4500,
    qty: 1,
    like: false,
  },

  {
    id: 7,
    imgUrl: "images/7.jpg",
    title: "Kenwood",
    description:
      "Sandwich Maker 3 * 1 Waffle SMM02 Black - International Warranty",
    price: 2400,
    qty: 1,
  },

  {
    id: 8,
    imgUrl: "images/8.jpg",
    title: "Black & Decker",
    description:
      "4 Liter Fryer - AF400-B5 - - International Warranty 220V supply voltage and 50Hz",
    price: 4200,
    qty: 1,
  },

  {
    id: 9,
    imgUrl: "images/9.jpg",
    title: "Sokany",
    description: "Grinder- chopper with stainless bowl/2 l - 400 w, (sk-7020)",
    price: 780,
    qty: 1,
  },
];

localStorage.setItem("products", JSON.stringify(productsDataBase));
