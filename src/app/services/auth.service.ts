import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl; 
  private userIdKey = 'user_id'; 

  private usernameSubject = new BehaviorSubject<string | null>(null);
  username$ = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Login method
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/login`, { email, password });
  }

  // Save user ID and username to localStorage
  saveUserId(userId: string, username: string): void {
    localStorage.setItem(this.userIdKey, userId);
    this.usernameSubject.next(username); 
  }

  // Get user ID from localStorage
  getUserId(): string | null {
    return localStorage.getItem(this.userIdKey);
  }

  // Logout method
  logout(): void {
    localStorage.removeItem(this.userIdKey);
  }
}
