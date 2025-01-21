export interface Comment {
  user: { username: string; email: string }; // Atau objek user yang lebih lengkap jika diperlukan
  text: string;
  createdAt: string; // Tanggal pembuatan komentar
}

export interface Todo {
  _id: string;
  title: string;
  description: string;
  dueDate: Date;
  user: { username: string; email: string };
  category: { name: string };
  isEditing?: boolean;
  createdAt: string;
  liked: boolean;
  comments: Comment[]; // Menambahkan properti comments yang merupakan array dari Comment
}

export interface TodoResponse {
  message: string;
  todos: Todo[];
}
