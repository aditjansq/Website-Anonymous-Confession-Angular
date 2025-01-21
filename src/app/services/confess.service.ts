import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Confess } from '../models/confess.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfessService {
  private apiUrl = environment.apiUrl;  // Menggunakan apiUrl dari environment.ts

  constructor(private http: HttpClient) {}

  // Mendapatkan semua confess
  getAllConfesses(): Observable<Confess[]> {
    return this.http.get<Confess[]>(`${this.apiUrl}/confesses/all`);
  }

  // Mendapatkan confess berdasarkan ID
  getConfessById(id: string): Observable<Confess> {
    return this.http.get<Confess>(`${this.apiUrl}/confesses/${id}`);
  }

  // Membuat confess baru
    // Mengirimkan confess dan userId ke server

    // Mengirimkan confess dan userId ke server
    createConfess(confess: Partial<Confess>, userId: string): Observable<Confess> {
      // Menambahkan userId ke dalam body request
      const confessData = { ...confess, user: userId };  
      return this.http.post<Confess>(`${this.apiUrl}/confesses`, confessData);
    }

  
  
  

  // Mengupdate confess berdasarkan ID
  updateConfess(id: string, updatedData: Partial<Confess>): Observable<Confess> {
    return this.http.put<Confess>(`${this.apiUrl}/confesses/${id}`, updatedData);
  }

  // Menghapus confess berdasarkan ID
  deleteConfess(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/confesses/${id}`);
  }
}
