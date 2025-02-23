import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['../../../styles.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class AuthComponent {
  email: string = '';
  password: string = '';
  name: string = '';
  isRegister: boolean = false;
  regResponse: string = '';
  loginResponse: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(response => {
      if (response.user) {
        this.authService.user = response.user;
        this.authService.setCurrentUser(response.user);
        this.loginResponse = "Login successful for user " + response.user.name;
        setTimeout(() => {
          this.loginResponse = '';
          this.router.navigate(['/account']);
        }, 1500);
      }
    }, error => {
      this.loginResponse = "Login failed";
      setTimeout(() => {
        this.loginResponse = '';
      }, 1500);
      console.error('Login failed', error);
    });
  }

  register() {
    console.log('Registering user', this.name, this.email, this.password);
    this.authService.createUser(this.name, this.email, this.password).subscribe(response => {
      console.log('Registration successful', response);
      if (response.name) {
        this.regResponse = "Registration successful for user " + response.name;
        setTimeout(() => {
        this.regResponse = '';
        this.toggleRegister();
      }, 1500);
      
    }
    }, error => {
      this.regResponse = "Registration failed";
      setTimeout(() => {
        this.regResponse = '';
      }, 1500);
      console.error('Registration failed', error);
    });
  }

  toggleRegister() {
    this.isRegister = !this.isRegister;
  }
}