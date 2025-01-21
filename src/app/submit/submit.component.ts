import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConfessService } from '../services/confess.service';
import { AuthService } from '../services/auth.service';  // Import AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
})
export class SubmitComponent {
  confessForm: FormGroup;
  isNotificationOpen: boolean = false; // Flag untuk membuka modal notifikasi

  constructor(
    private fb: FormBuilder,
    private confessService: ConfessService,
    private authService: AuthService,  // Inject AuthService
    private router: Router
  ) {
    // Inisialisasi form dengan validasi
    this.confessForm = this.fb.group({
      receiver: ['', [Validators.required, Validators.minLength(3)]],  // Validasi penerima
      message: ['', [Validators.required, Validators.minLength(10)]],  // Validasi pesan
    });
  }

  // Metode untuk submit form
  onSubmit() {
    if (this.confessForm.valid) {
      const confessData = this.confessForm.value;  // Ambil data dari form
      const userId = this.authService.getUserId();  // Ambil userId dari AuthService

      if (userId) {
        // Kirimkan confessData bersama dengan userId
        this.confessService.createConfess(confessData, userId).subscribe(
          (response) => {
            console.log('Pengakuan berhasil dikirim:', response);
            this.showNotification();  // Tampilkan modal notifikasi
            // Arahkan ke halaman lain setelah sukses
            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            }, 1500);  // Menunggu 1.5 detik agar modal terlihat
          },
          (error) => {
            console.error('Terjadi kesalahan saat mengirim pengakuan:', error);
            alert('Gagal mengirim pengakuan. Silakan coba lagi.');
          }
        );
      } else {
        console.error('User ID tidak ditemukan');
        alert('User ID tidak ditemukan. Pastikan Anda sudah login.');
      }
    }
  }

  // Menampilkan modal notifikasi
  showNotification() {
    this.isNotificationOpen = true;
  }

  // Menutup modal notifikasi
  closeNotification() {
    this.isNotificationOpen = false;
  }
}
