import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LoginCredentials, RegisterCredentials, TokenResponse} from "../../model/auth.model";
import {Observable} from "rxjs";
import {UserResponse} from "../../model/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = environment.apiUrl + '/auth';

    constructor(private http: HttpClient) {
    }

    login(credentials: LoginCredentials): Observable<TokenResponse> {
        return this.http.post<TokenResponse>(this.apiUrl + '/login', credentials);
    }

    register(credentials: RegisterCredentials): Observable<UserResponse> {
        return this.http.post<UserResponse>(this.apiUrl + '/register', credentials);
    }

    saveToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
    }
}

