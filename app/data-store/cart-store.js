import { create } from "zustand";

const cartStore = create((set) => ({
  products: [
    {
      title: "Noise-Cancelling Wireless Headphones",
      img: "https://m.media-amazon.com/images/I/31A-AWx8PLL._SX342_SY445_QL70_FMwebp_.jpg",
      price: 299.99,
      discount: 0.1,
      reviews: 4.7,
      delivery: "Next-Day Delivery ($5 fee)",
    },
    {
      title: "Classic Hardcover Novel: 'The Voyager'",
      img: "https://m.media-amazon.com/images/I/71JGCn1z1TL._SX679_.jpg",
      price: 18.5,
      discount: 0.0,
      reviews: 4.9,
      delivery: "Standard 3-5 Day Shipping (Free)",
    },
    {
      title: "4K Ultra HD Smart Television (55-inch)",
      img: "https://m.media-amazon.com/images/I/31A-AWx8PLL._SX342_SY445_QL70_FMwebp_.jpg",
      price: 750.0,
      discount: 0.2,
      reviews: 4.3,
      delivery: "In-Home Setup and Delivery",
    },
    {
      title: "Men's Waterproof Hiking Boots",
      img: "https://m.media-amazon.com/images/I/71JGCn1z1TL._SX679_.jpg",
      price: 95.0,
      discount: 0.25,
      reviews: 4.6,
      delivery: "Free 2-Day Shipping (Prime Members)",
    },
    {
      title: "Organic Fair Trade Coffee Beans (1lb)",
      img: "https://m.media-amazon.com/images/I/31A-AWx8PLL._SX342_SY445_QL70_FMwebp_.jpg",
      price: 15.99,
      discount: 0.0,
      reviews: 4.8,
      delivery: "Shipped within 24 hours",
    },
  ],
  cart: [],

  addToCart: (product) => set((state) => 
    ({cart: [...state.cart,product]})),

  removeFromCart: (item) =>
    set((state) => ({
      cart: state.cart.filter((product) =>
         product.title != item.title),
    })),
}));
export default cartStore;
