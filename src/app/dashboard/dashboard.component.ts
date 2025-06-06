import { Component, OnInit } from '@angular/core';
import { ConfessService } from '../services/confess.service';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Confess } from '../models/confess.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  confesses: Confess[] = [];
  filteredConfesses: Confess[] = [];
  searchTerm: string = '';
  isLogoutModalOpen: boolean = false;
  isShareModalOpen: boolean = false;
  isMobileMenuOpen = false;
  shareLink: string = '';

  constructor(
    private confessService: ConfessService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadConfesses();
  }

  goToViewConfess(confessId: string) {
    this.router.navigate(['/view-confess', confessId]);
  }

  loadConfesses(): void {
    this.confessService.getAllConfesses().subscribe(
      (confesses) => {
        this.confesses = confesses.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        this.filteredConfesses = [...this.confesses];
      },
      (error) => {
        console.error('Gagal mengambil data confess:', error);
      }
    );
  }

  filterConfesses(): void {
    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.toLowerCase();
      this.filteredConfesses = this.confesses.filter((confess) => {
        const receiver = confess.receiver.toLowerCase();
        const message = confess.message.toLowerCase();
        return receiver.includes(searchLower) || message.includes(searchLower);
      });
    } else {
      this.filteredConfesses = [...this.confesses];
    }
  }

  viewConfessDetail(confessId: string): void {
    this.router.navigate(['/view-confess', confessId]);
  }

  openLogoutModal(): void {
    this.isLogoutModalOpen = true;
  }

  closeLogoutModal(): void {
    this.isLogoutModalOpen = false;
  }

  confirmLogout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
    this.closeLogoutModal();
  }

  openShareModal(confessId: string): void {
    this.shareLink = `${window.location.origin}/view-confess/${confessId}`;
    this.isShareModalOpen = true;
  }

  closeShareModal(): void {
    this.isShareModalOpen = false;
  }

  // Fungsi copy otomatis ke clipboard dengan alert konfirmasi
  copySuccess: boolean = false;

  copyToClipboard() {
    navigator.clipboard.writeText(this.shareLink).then(() => {
      this.copySuccess = true;
      // Hide message after 2.5 seconds
      setTimeout(() => {
        this.copySuccess = false;
      }, 2500);
    }).catch((err) => {
      alert('Gagal menyalin link: ' + err);
    });
  }
  
}
