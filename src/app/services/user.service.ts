import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userIdKey = 'user_id';

  constructor() {}

  saveUserId(userId: string): void {
    localStorage.setItem(this.userIdKey, userId);
  }

  getUserId(): string | null {
    return localStorage.getItem(this.userIdKey);
  }
  // Contoh di UserService
  getUsername(): string | null {
    // Mendapatkan username dari localStorage atau mekanisme lain
    return localStorage.getItem('username');
  }


  logout(): void {
    localStorage.removeItem(this.userIdKey); 
  }

  isLoggedIn(): boolean {
    return this.getUserId() !== null;
  }
}
