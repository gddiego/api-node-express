export interface Course {
  id?: string;
  name: string;
  requirement: string;
  workload: string;
  price: number;
  created_at: Date;
  update_at: Date;
}