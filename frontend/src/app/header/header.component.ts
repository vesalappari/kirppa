import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, NavbarComponent]
})
export class HeaderComponent {
  isModalOpen = false;
  user: User | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => this.user = user);
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
    this.closeModal();
    this.router.navigate(['/frontpage']);
  }
}
