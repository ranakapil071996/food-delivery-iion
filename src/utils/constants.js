import PizzaIcon from '../assets/icons/food/pizza.svg';
import CakeIcon from '../assets/icons/food/cake.svg';
import BurgerIcon from '../assets/icons/food/burger.svg';
import MeatIcon from '../assets/icons/food/meat.svg';
import VeganIcon from '../assets/icons/food/vegan.svg';
import SushiIcon from '../assets/icons/food/sushi.svg';

export const restaurants = [
  {
    id: 1,
    name: 'Royal Sushi House',
    deliveryTime: '30-40 min',
    avgCost: '$32 min sum',
    categoryServes: [4],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    isFeatured: true
  },
  {
    id: 2,
    name: 'Burgers & Pizza',
    deliveryTime: '30-40 min',
    avgCost: '$32 min sum',
    categoryServes: [1, 2],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    isFeatured: true
  },
  {
    id: 3,
    name: 'Green Garden',
    deliveryTime: '25-35 min',
    avgCost: '$20 min sum',
    categoryServes: [5],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
  },
  {
    id: 4,
    name: 'BBQ Nation',
    deliveryTime: '45-55 min',
    avgCost: '$40 min sum',
    categoryServes: [3],
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092'
  },
  {
    id: 6,
    name: 'Burger Hub',
    deliveryTime: '15-25 min',
    avgCost: '$18 min sum',
    categoryServes: [2],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349'
  },
  {
    id: 7,
    name: 'Sweet Treats',
    deliveryTime: '30-45 min',
    avgCost: '$22 min sum',
    categoryServes: [6],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
  },
  {
    id: 8,
    name: 'Ocean Sushi',
    deliveryTime: '35-45 min',
    avgCost: '$30 min sum',
    categoryServes: [4],
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092'
  },
  {
    id: 9,
    name: 'Vegan Vibes',
    deliveryTime: '25-35 min',
    avgCost: '$24 min sum',
    categoryServes: [5],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
  },
  {
    id: 10,
    name: 'BBQ Express',
    deliveryTime: '40-50 min',
    avgCost: '$38 min sum',
    categoryServes: [3],
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092'
  },
  {
    id: 12,
    name: 'Burger Bites',
    deliveryTime: '15-20 min',
    avgCost: '$19 min sum',
    categoryServes: [2],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349'
  },
  {
    id: 15,
    name: 'Choco Delight',
    deliveryTime: '30-35 min',
    avgCost: '$20 min sum',
    categoryServes: [6],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
  }
];

export const categories = {
  1: {
    id: 1,
    name: 'Pizza',
    image: PizzaIcon
  },
  2: {
    id: 2,
    name: 'Burger',
    image: BurgerIcon
  },
  3: {
    id: 3,
    name: 'BBQ',
    image: MeatIcon
  },
  4: {
    id: 4,
    name: 'Sushi',
    image: SushiIcon
  },
  5: {
    id: 5,
    name: 'Vegan',
    image: VeganIcon
  },
  6: {
    id: 6,
    name: 'Desserts',
    image: CakeIcon
  },
}

export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}