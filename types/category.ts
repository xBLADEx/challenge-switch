export type CategoryId =
  | 'category-001'
  | 'category-002'
  | 'category-003'
  | 'category-004'
  | 'category-005';

export interface Category {
  id: CategoryId;
  name: string;
}
