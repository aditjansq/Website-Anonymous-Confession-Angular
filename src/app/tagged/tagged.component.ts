import { Component, OnInit } from '@angular/core';
import { TaggedService } from '../services/tagged.service'; // Import TaggedService
import { TaggedConfess } from '../models/tagged.model'; // Import TaggedConfess model
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tagged',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './tagged.component.html',
  styleUrls: ['./tagged.component.css'],
})
export class TaggedComponent implements OnInit {
  taggedConfesses: TaggedConfess[] = []; // Menyimpan data tagged confesses
  newTag: string = ''; // Menyimpan tag baru untuk ditambahkan

  constructor(private taggedService: TaggedService) {}

  ngOnInit(): void {
    // Mendapatkan semua tagged confesses saat komponen pertama kali dimuat
    this.taggedService.getAllTaggedConfesses().subscribe(
      (data) => {
        this.taggedConfesses = data; // Menyimpan data tagged confesses
      },
      (error) => {
        console.error('Error fetching tagged confesses:', error);
      }
    );
  }

  // Method untuk membuat tagged confess baru
  addTaggedConfess(): void {
    if (!this.newTag.trim()) {
      console.error('Tag tidak boleh kosong!');
      return;
    }

    const newTaggedConfess: TaggedConfess = {
      _id: '', // ID akan dihasilkan otomatis oleh MongoDB
      tags: [this.newTag], // Menambahkan tag baru yang dimasukkan pengguna
    };

    this.taggedService.createTaggedConfess(newTaggedConfess).subscribe(
      (response) => {
        this.taggedConfesses.push(response); // Menambahkan tagged confess baru ke array
        this.newTag = ''; // Reset input tag
      },
      (error) => {
        console.error('Error creating tagged confess:', error);
      }
    );
  }
}
