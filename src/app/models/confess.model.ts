export interface User {
  name: string;
  email: string;
}

export interface Confess {
  _id: string;
  receiver: string;
  message: string;
  user: { name: string; email: string } | null;
  createdAt: Date;
}
