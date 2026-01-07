
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Review {
  id: number;
  author: string;
  content: string;
  rating: number;
  date: string;
}
