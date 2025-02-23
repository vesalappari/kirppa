import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['../../../styles.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AuthComponent {
  isRegistering = false;
  loginEmail = '';
  loginPassword = '';
  registerName = '';
  registerEmail = '';
  registerPassword = '';
  registerConfirmPassword = '';

  constructor(private authService: AuthService) {}

  toggleRegister() {
    this.isRegistering = !this.isRegistering;
  }

  login() {
    this.authService.login(this.loginEmail, this.loginPassword).subscribe(
      response => {
        console.log('Login successful', response);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

  register() {
    if (this.registerPassword !== this.registerConfirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    this.authService.createUser(this.registerName, this.registerEmail, this.registerPassword).subscribe(
      response => {
        console.log('Registration successful', response);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
