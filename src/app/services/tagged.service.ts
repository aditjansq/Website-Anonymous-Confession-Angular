import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaggedConfess } from '../models/tagged.model'; // Import model TaggedConfess

@Injectable({
  providedIn: 'root',
})
export class TaggedService {
  private apiUrl = 'http://localhost:3000/tagged'; // URL API untuk tagged confesses

  constructor(private http: HttpClient) {}

  // Mendapatkan semua tagged confesses
  getAllTaggedConfesses(): Observable<TaggedConfess[]> {
    return this.http.get<TaggedConfess[]>(`${this.apiUrl}/all`);
  }

  // Menambahkan tagged confess baru
  createTaggedConfess(newTaggedConfess: TaggedConfess): Observable<TaggedConfess> {
    return this.http.post<TaggedConfess>(this.apiUrl, newTaggedConfess);
  }
}
