import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environment';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  public user = this.userSubject.asObservable();
  private apiUrl = environment.apiUrl;

  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    console.log('Logging in', `${this.apiUrl}/auth/login`, { email, password });
    return this.http.post<User>(`${this.apiUrl}/auth/login`, { email, password }).pipe(
      tap(user => this.userSubject.next(user))
    );
  }

  createUser(name: string, email: string, password: string): Observable<any> {
    console.log('Creating user', `${this.apiUrl}/users/create`, { name, email, password });
    return this.http.post(`${this.apiUrl}/users/create`, { name, email, password });
  }

  logout() {
    this.userSubject.next(null);
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser;
  }

  setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
  }
}