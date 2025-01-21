import { Category } from './category.model';
export interface CategoryResponse {
  message: string;
  categories: Category[];
}
