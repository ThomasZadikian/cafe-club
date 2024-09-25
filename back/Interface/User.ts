export interface User {
  user_id: number;
  username: string;
  email: string;
  password: string;
  role_id: number;
  orders_ids: number[];
}

export type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};
