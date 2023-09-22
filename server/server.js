const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
const sharp = require("sharp");
sharp.cache(false);

const DUMMY_PRODUCTS = [
  {
    image:
      "https://bouqs.com/product_images/hot-pink-lilies-roses-ranunculus/Deluxe/5ef29e9d69fef500825fc0f3/detail.jpg?c=1592958621",
    image_hover:
      "https://bouqs.com/product_images/hot-pink-lilies-roses-ranunculus/Deluxe/5ef29ea769fef5009e5fe2fa/detail.jpg?c=1592958631",
    image_detail:
      "https://bouqs.com/product_images/hot-pink-lilies-roses-ranunculus/Deluxe/5ef29e934edf53008b083efb/detail.jpg?c=1592958611",
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
      "https://bouqs.com/product_images/pink-peach-garden-roses/Deluxe/64efad54996be4009eb18d72/detail.jpg?c=1693429076",
    image_hover:
      "https://bouqs.com/product_images/pink-peach-garden-roses/Deluxe/64efad318da85f008afe68c9/detail.jpg?c=1693429041",
    image_detail:
      "https://bouqs.com/product_images/pink-peach-garden-roses/Deluxe/64efad318da85f008afe68c9/detail.jpg?c=1693429041",
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
      "https://bouqs.com/product_images/sunflower-peach-carnations-roses/Deluxe/630ff1dacb262c008f3e78af/detail.jpg?c=1661989338",
    image_hover:
      "https://bouqs.com/product_images/sunflower-peach-carnations-roses/Deluxe/630ff1cd79a294009625475d/detail.jpg?c=1661989325",
    image_detail:
      "https://bouqs.com/product_images/sunflower-peach-carnations-roses/Deluxe/630ff1cd79a294009625475d/detail.jpg?c=1661989325",
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
      "https://bouqs.com/product_images/peach-yellow-roses-carnations-alstroemeria/Deluxe/5e62fc7f18294c008d6c6130/detail.jpg?c=1583545471",
    image_hover:
      "https://bouqs.com/product_images/peach-yellow-roses-carnations-alstroemeria/Deluxe/5e62fc89cee3f101f5fbedee/detail.jpg?c=1583545481",
    image_detail:
      "https://bouqs.com/product_images/peach-yellow-roses-carnations-alstroemeria/Deluxe/5e62fc6a18294c008d6c600c/detail.jpg?c=1583545450",
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
  {
    image:
      "https://bouqs.com/product_images/purple-pompons-mums-burgundy-carnations/Deluxe/64ee809022b85c009ae4ecc0/detail.jpg?c=1693352080",
    image_hover:
      "https://bouqs.com/product_images/purple-pompons-mums-burgundy-carnations/Deluxe/64ee805610d69a008e824063/detail.jpg?c=1693352023",
    image_detail:
      "https://bouqs.com/product_images/purple-pompons-mums-burgundy-carnations/Deluxe/64ee805610d69a008e824063/detail.jpg?c=1693352023",
    id: "p6",
    price: 89,
    title: "Scarlett",
    color: ["Pink", "Orange"],
    avaliability: "In stock",
    types: ["Roses"],
    dimensions: [38, 30],
    arrangements: "Flower Bouquets",
    collection: "wedding",
    description:
      "All in lovely shades from white to pink, Romy is a crisp mix of fragrant roses, daisies, and alstroemerias.",
    blooms: "This bouquet includes pompons, mums, carnations, and more.",
    same_day_delivery: "Same day delivery",
  },
  {
    image:
      "https://bouqs.com/product_images/orchid-ginger-sansevieria/Original/62a24b39faf0ff0095958282/detail.jpg?c=1654803257",
    image_hover:
      "https://bouqs.com/product_images/orchid-ginger-sansevieria/Original/62a24b2a81f6da0087fa0b01/detail.jpg?c=1654803242",
    image_detail:
      "https://bouqs.com/product_images/orchid-ginger-sansevieria/Original/62a24b2a81f6da0087fa0b01/detail.jpg?c=1654803242",
    id: "p7",
    price: 120,
    title: "Copacabana",
    color: ["Yellow", "White"],
    avaliability: "In stock",
    types: ["Lilies"],
    dimensions: [38, 30],
    arrangements: "Flower Bouquets",
    collection: "care",
    description:
      "All in lovely shades from white to pink, Romy is a crisp mix of fragrant roses, daisies, and alstroemerias.",
    blooms:
      "Vibrant tropical arrangement featuring yellow Cymbidium orchid, Ginger, and Sansevieria. White Marina vase included.",
    same_day_delivery: "Same day delivery",
  },
  {
    image:
      "https://bouqs.com/product_images/yellow-peach-roses-chrysanthemum-lily/Deluxe/64ee7e943d29a30094dd19dc/detail.jpg?c=1693351572",
    image_hover:
      "https://bouqs.com/product_images/yellow-peach-roses-chrysanthemum-lily/Deluxe/64ee7e83e5fbfe00950c87ac/detail.jpg?c=1693351555",
    image_detail:
      "https://bouqs.com/product_images/yellow-peach-roses-chrysanthemum-lily/Deluxe/64ee7e83e5fbfe00950c87ac/detail.jpg?c=1693351555",
    id: "p8",
    price: 60,
    title: "Amber",
    color: ["Yellow", "Orange"],
    avaliability: "In stock",
    types: ["Roses", "Lilies"],
    dimensions: [38, 30],
    arrangements: "Flower Bouquets",
    collection: "love",
    description:
      "The Amber Bouq is a fall must-have. This arrangement comes in our two-toned clay vase and features roses, chrysanthemum, and lily blooms.",
    blooms:
      "Red lilies, peach and yellow roses, bronze chrysanthemums and sprigs of yellow solidago.",
    same_day_delivery: "Same day delivery",
  },

  {
    image:
      "https://bouqs.com/product_images/yellow-sunflowers-alstroemeria-solidago/Deluxe/64ee7ef21daebd0098b9082b/detail.jpg?c=1693351666",
    image_hover:
      "https://bouqs.com/product_images/yellow-sunflowers-alstroemeria-solidago/Deluxe/64ee7edf60be6f009ff429e3/detail.jpg?c=1693351647",
    image_detail:
      "https://bouqs.com/product_images/yellow-sunflowers-alstroemeria-solidago/Deluxe/64ee7edf60be6f009ff429e3/detail.jpg?c=1693351647",
    id: "p9",
    price: 88,
    title: "Autumn",
    color: ["Yellow"],
    avaliability: "In stock",
    types: ["Sunflowers"],
    dimensions: [70, 50],
    arrangements: "Flower Bouquets",
    collection: "care",
    description:
      "Capture the essence of the season with the Autumn arrangement.",
    blooms: "Sunny yellow blooms accented by red Leucadendron.",
    same_day_delivery: "Same day delivery",
  },
];

const DUMMY_ADDONS = [
  {
    image: "https://bearloonsg.com/wp-content/uploads/2021/01/10-3.jpg",
    image_hover: "https://bearloonsg.com/wp-content/uploads/2021/01/25.jpg",
    image_detail: "https://bearloonsg.com/wp-content/uploads/2021/01/25.jpg",

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
      "https://www.bigbasket.com/media/uploads/p/l/40257008_1-cherishxcom-star-shape-foil-balloons-decoration-items-for-birthday-kids-girls-wife-golden-silver.jpg",
    image_hover:
      "https://www.partywholesale.com.sg/images/watermarked/1/detailed/9/Gold-Number-Confetti-Helium-Balloon-Delivery-Singapore.jpg",
    image_detail:
      "https://www.partywholesale.com.sg/images/watermarked/1/detailed/9/Gold-Number-Confetti-Helium-Balloon-Delivery-Singapore.jpg",

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
