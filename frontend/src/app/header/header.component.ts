import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]
})
export class HeaderComponent {
  isModalOpen = false;
  user: User | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.user?.subscribe(user => {
      this.user = user;
    });
  }

  navigateToFrontpage() {
    this.router.navigate(['/frontpage']);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  showAuth() {
    this.router.navigate(['/login']);
    this.closeModal();
  }

  logout() {
    this.authService.logout();
  }
}
