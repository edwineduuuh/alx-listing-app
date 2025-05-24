export interface CardProps {
  title: string;
  description: string;
  image?: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  category: string;
  rating?: number;
  reviewsCount?: number;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  email: string;
}