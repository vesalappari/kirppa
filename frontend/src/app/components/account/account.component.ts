import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  imports: [CommonModule]
})
export class AccountComponent implements OnInit, OnChanges {
  user: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
      this.handleUserChange();
    });
  }

  ngOnChanges(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
      this.handleUserChange();
    });
  }

  handleUserChange(): void {
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }
}
