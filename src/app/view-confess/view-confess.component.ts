import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfessService } from '../services/confess.service';
import { Confess } from '../models/confess.model';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-view-confess',
  standalone: true,
  imports: [CommonModule], // Tambahkan CommonModule di sini
  templateUrl: './view-confess.component.html',
  styleUrls: ['./view-confess.component.css']
})
export class ViewConfessComponent implements OnInit {
  confess: Confess | null = null;
  isLoading = true;

  constructor(
    private confessService: ConfessService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadConfess(id);
    }
  }

  loadConfess(id: string): void {
    this.confessService.getConfessById(id).subscribe(
      (response) => {
        this.confess = response;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching confess:', error);
        this.isLoading = false;
      }
    );
  }
}
