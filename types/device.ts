import { CategoryId } from './category';

export interface Device {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  rating: number;
  description: string;
}
