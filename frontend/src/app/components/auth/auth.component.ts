import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['../../../styles.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})

export class AuthComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isRegister: boolean = false;
  regResponse: string = '';
  loginResponse: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])/)]]
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(response => {
        if (response.user) {
          this.authService.user = response.user;
          this.authService.setCurrentUser(response.user);
          setTimeout(() => {
            this.loginResponse = '';
            this.router.navigate(['/account']);
          }, 500);
        }
      }, error => {
        this.loginResponse = error.error.message;
        setTimeout(() => {
          this.loginResponse = '';
        }, 3000);
        console.error('Login failed', error);
      });
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      this.authService.createUser(name, email, password).subscribe(response => {
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
  }

  toggleRegister() {
    this.isRegister = !this.isRegister;
  }
}