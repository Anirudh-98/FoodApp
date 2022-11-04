import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';


export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Sweet',
    price: 20,
    cookTime: '5mins',
    favorite: false,
    origins: ['India', 'Asia'],
    stars: 4.0,
    imageUrl: 'assets/food/img1.jpg',
    tags: ['SlowFood', 'Sweet']

  },
  {
    id: '2',
    name: 'Chicken Biriyani',
    price: 120,
    cookTime: '40-50 mins',
    favorite: false,
    origins: ['India', 'Asia'],
    stars: 4.0,
    imageUrl: 'assets/food/img2.jpg',
    tags: ['SlowFood', 'Rice Item','Briyani']

  },
  {
    id: '3',
    name: 'Egg Biriyani',
    price: 100,
    cookTime: '40-50 mins',
    favorite: false,
    origins: ['India', 'Asia'],
    stars: 4.0,
    imageUrl: 'assets/food/img3.jpg',
    tags: ['SlowFood', 'Rice Item','Briyani']

  },
  {
    id: '4',
    name: 'Special Dessert',
    price: 150,
    cookTime: '40-50 mins',
    favorite: false,
    origins: ['India', 'Asia'],
    stars: 4.0,
    imageUrl: 'assets/food/img4.jpg',
    tags: ['SlowFood', 'Dessert Item','Dessert']

  },
  {
    id: '5',
    name: 'Sweet',
    price: 50,
    cookTime: '5mins',
    favorite: false,
    origins: ['India', 'Asia'],
    stars: 4.0,
    imageUrl: 'assets/food/img5.jpg',
    tags: ['SlowFood', 'sweet Item','Sweet']

  },
  {
    id: '6',
    name: 'Indian thali',
    price:799,
    cookTime: '40-50 mins',
    favorite: false,
    origins: ['India', 'Asia'],
    stars: 4.0,
    imageUrl: 'assets/food/img6.jpg',
    tags: ['SlowFood', 'Rice Item','Thali']
  },
  {
    id: '7',
    name: 'Butterscotch icecream',
    price:150,
    cookTime: '5-10 mins',
    favorite: false,
    origins: ['India', 'Asia'],
    stars: 4.0,
    imageUrl: 'assets/food/img7.jpg',
    tags: ['SlowFood', 'Icecream']
  },
  {
    id: '8',
    name: 'vinilla icecream',
    price:180,
    cookTime: '5-10 mins',
    favorite: false,
    origins: ['India', 'Asia'],
    stars: 4.0,
    imageUrl: 'assets/food/img8.jpg',
    tags: ['SlowFood', 'Icecream']
  },
  {
    id: '9',
    name: 'Veg Friedrice',
    price:110,
    cookTime: '20-30 mins',
    favorite: false,
    origins: ['India', 'Asia'],
    stars: 4.0,
    imageUrl: 'assets/food/img9.jpg',
    tags: ['SlowFood', 'Friedrice']
  },
  {
    id: '10',
    name: 'Chicken fried Rice',
    price:120,
    cookTime: '20-30 mins',
    favorite: false,
    origins: ['India', 'Asia'],
    stars: 4.0,
    imageUrl: 'assets/food/img10.jpg',
    tags: ['SlowFood', 'Friedrice']
  },
  {
    id: '11',
    name: 'Noodles',
    price:99,
    cookTime: '10-15 mins',
    favorite: false,
    origins: ['India', 'Asia'],
    stars: 4.0,
    imageUrl: 'assets/food/img11.jpg',
    tags: ['Fastfood', 'Noodles']
  },
  {
    id: '12',
    name: 'Panner Pizza',
    price:250,
    cookTime: '30-40 mins',
    favorite: false,
    origins: ['India', 'Asia'],
    stars: 4.0,
    imageUrl: 'assets/food/img12.jpg',
    tags: ['Fastfood', 'Pizza']
  }
]

export const sample_tags:Tag[] = [
  {name:'All', count: 12},
  {name:'Briyani', count:2},
  {name:'Icecream', count:2},
  {name:'Sweet', count:2},
  {name:'Friedrice', count:2},
  {name:'Noodles', count:1},
  {name:'Thali', count:1},
  {name:'Dessert', count:1},
  {name:"Pizza", count:1}
]
