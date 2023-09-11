// IMAGE
// import p1 from "./assets/dicoverimg.jpg";
// import ph1 from "./assets/hover.jpg";
// import pd1 from "./assets/detail.jpg";

// const fs = require("fs");
// const path = require("path");
// const img = path.join(__dirname, "./assets/dicoverimg.jpg");
// const p1 = fs.readFileSync(img, { encoding: "utf8" });
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const DUMMY_PRODUCTS = [
  {
    image:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMjIvMzQvYjQzMzYzODItMjM1YS00MmQ4LWE3ZTMtZDQ1MjEzMjk5ZDE0L01PTTIyX092ZXJUaGVSYWluYm93X0RMX0hIXzA4NC5qcGciXV0/MOM22_OverTheRainbow_DL_HH_084.jpg?sha=9f52df27b6e20c22",
    image_hover:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",
    image_detail:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",
    id: "p1",
    price: 45.0,
    title: "Cool Blue",
    color: ["Pink"],
    avaliability: "Out of stock",
    types: ["Tuilps"],
    dimensions: [23, 22],
    arrangements: "Flower Bouquets",
    collection: "birthday",
    description:
      "This Get well soon basket will help to recover your loved ones in no time.",
    blooms: "Light Pink Tuilps (3 Stalks)",
    same_day_delivery: "1 to 2 working days",
  },
  {
    image:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMjIvMzQvYjQzMzYzODItMjM1YS00MmQ4LWE3ZTMtZDQ1MjEzMjk5ZDE0L01PTTIyX092ZXJUaGVSYWluYm93X0RMX0hIXzA4NC5qcGciXV0/MOM22_OverTheRainbow_DL_HH_084.jpg?sha=9f52df27b6e20c22",
    image_hover:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",
    image_detail:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",
    id: "p2",
    price: 119.9,
    title: "Madeleine",
    color: ["Pink", "White"],
    avaliability: "In stock",
    types: ["Roses", "Lilies"],
    dimensions: [30, 25],
    arrangements: "Flower Bouquets",
    collection: "love",
    description:
      "For the woman that will always be your #1. Remind her of how extraordinary she is by surprising her with a bouquet that will make her heart flutter. This lush mix of fragrant pink lilies and lush white roses is destined to brighten someone's day!",
    blooms: "White Rose (17 Stalks), Pink Lily (5 Stalks)",
    same_day_delivery: "Same day delivery",
  },
  {
    image:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMjIvMzQvYjQzMzYzODItMjM1YS00MmQ4LWE3ZTMtZDQ1MjEzMjk5ZDE0L01PTTIyX092ZXJUaGVSYWluYm93X0RMX0hIXzA4NC5qcGciXV0/MOM22_OverTheRainbow_DL_HH_084.jpg?sha=9f52df27b6e20c22",
    image_hover:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",
    image_detail:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",
    id: "p3",
    price: 159.9,
    title: "Amber Abundance",
    color: ["Orange", "Yellow"],
    avaliability: "In stock",
    types: ["Lilies", "Roses"],
    dimensions: [70, 50],
    arrangements: "Flower Bouquets",
    collection: "care",
    description:
      "A warm, golden symphony of precious petals, arranged together for the most marvelous of celebrations! ",
    blooms:
      "Orange Lily (3 stalks), Champagne Rose (10 stalks), Yellow Alstroemeria (5 stalks), Greentick (3 stalks), Eucalyptus Cinerea",
    same_day_delivery: "Same day delivery",
  },
  {
    image:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMjIvMzQvYjQzMzYzODItMjM1YS00MmQ4LWE3ZTMtZDQ1MjEzMjk5ZDE0L01PTTIyX092ZXJUaGVSYWluYm93X0RMX0hIXzA4NC5qcGciXV0/MOM22_OverTheRainbow_DL_HH_084.jpg?sha=9f52df27b6e20c22",
    image_hover:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",
    image_detail:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",
    id: "p4",
    price: 329.9,
    title: "Opening Flower Stand",
    color: ["Orange", "Yellow", "Pink"],
    avaliability: "In stock",
    types: ["Roses", "Sunflowers"],
    dimensions: [60, 170],
    arrangements: "Flower Stand",
    collection: "care",
    description: "Best Of Luck Opening Flower Stand",
    blooms:
      "Shocking Pink Rose (10 Stalks), Sunflower (5 Stalks), Bird of Paradise (5 Stalks), Champagne Eustoma (5 Stalks), Red Gerbera (10 Stalks), Pink Hydrangea (1 Stalk), Green Ivy (2 Stalks), Pink Anthurium (3 Stalks), Monstera, Eucalyptus Leaves",
    same_day_delivery: "3 to 5 working days",
  },
  {
    image:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMjIvMzQvYjQzMzYzODItMjM1YS00MmQ4LWE3ZTMtZDQ1MjEzMjk5ZDE0L01PTTIyX092ZXJUaGVSYWluYm93X0RMX0hIXzA4NC5qcGciXV0/MOM22_OverTheRainbow_DL_HH_084.jpg?sha=9f52df27b6e20c22",
    image_hover:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",
    image_detail:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",
    id: "p5",
    price: 87.9,
    title: "Romy",
    color: ["Pink", "White"],
    avaliability: "In stock",
    types: ["Roses"],
    dimensions: [38, 30],
    arrangements: "Flower Bouquets",
    collection: "wedding",
    description:
      "All in lovely shades from white to pink, Romy is a crisp mix of fragrant roses, daisies, and alstroemerias.",
    blooms:
      "Shocking Pink Rose (12 Stalks), White Carnation Spray(5 Stalks), Purple Caspia",
    same_day_delivery: "Same day delivery",
  },
];

const DUMMY_ADDONS = [
  {
    image:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMjIvMzQvYjQzMzYzODItMjM1YS00MmQ4LWE3ZTMtZDQ1MjEzMjk5ZDE0L01PTTIyX092ZXJUaGVSYWluYm93X0RMX0hIXzA4NC5qcGciXV0/MOM22_OverTheRainbow_DL_HH_084.jpg?sha=9f52df27b6e20c22",
    image_hover:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",
    image_detail:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",

    id: "a1",
    price: 20.0,
    title: "I Love You Ballon",
    avaliability: "In stock",
    description:
      "A cheerful I Love You Balloon that will make your birthday order extra special!",
    same_day_delivery: "same day delivery",
  },
  {
    image:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMjIvMzQvYjQzMzYzODItMjM1YS00MmQ4LWE3ZTMtZDQ1MjEzMjk5ZDE0L01PTTIyX092ZXJUaGVSYWluYm93X0RMX0hIXzA4NC5qcGciXV0/MOM22_OverTheRainbow_DL_HH_084.jpg?sha=9f52df27b6e20c22",
    image_hover:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",
    image_detail:
      "https://bouqs.com/media/W1siZiIsIjIwMjMvMDkvMDcvMTYvMTIvMTEvYmEzOTEyNDMtMzlhYi00ZmQwLTg3NDUtYjdiM2MxZWU0NTFjL0VWR19BbGxUaGVSYWdlX0RMX01hc29uXzA4MV9XZWIuanBnIl1d/EVG_AllTheRage_DL_Mason_081_Web.jpg?sha=fdf0d8aa2249a6ae",

    id: "a2",
    price: 12.0,
    title: "Birthday Star Ballon",
    avaliability: "In stock",
    description:
      "Wish the shining star in your life a fabulous birthday, with the perfect gift.",
    same_day_delivery: "same day delivery",
  },
];

app.get("/message", (req, res) => {
  res.json({ message: DUMMY_PRODUCTS });
});

app.get("/add_ons", (req, res) => {
  res.json({ add_ons: DUMMY_ADDONS });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
