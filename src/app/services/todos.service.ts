import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoResponse, Todo } from '../models/todo.model'; // Pastikan model sudah sesuai
import { UserService } from './user.service';
import { environment } from '../environments/environment';

export interface User {
  username: string;
  email: string;
}

export interface Category {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private apiUrl = environment.apiUrl; // URL API dari environment

  constructor(private http: HttpClient, private userService: UserService) {}

  // Mendapatkan username dari localStorage
  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  // Mendapatkan user ID dari localStorage
  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  // Mendapatkan semua Todo
  getTodos(): Observable<TodoResponse> {
    return this.http.get<TodoResponse>(`${this.apiUrl}/todos`);
  }

  // Mendapatkan detail Todo berdasarkan ID
  getTodoById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/todos/${id}`);
  }

  // Memperbarui Todo
  updateTodo(id: string, updatedData: Partial<Todo>): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/todos/${id}`, updatedData);
  }

  // Menghapus Todo
  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/todos/${id}`);
  }

  // Menambahkan komentar ke Todo
  addComment(todoId: string, comment: string): Observable<Todo> {
    const payload = { comment }; // Data yang dikirim ke API
    return this.http.post<Todo>(`${this.apiUrl}/todos/${todoId}/comments`, payload);
  }
}
