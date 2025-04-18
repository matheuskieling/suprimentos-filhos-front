import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TokenResponse} from "../../../model/auth.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(
        private authService: AuthService,
        private fb: FormBuilder,
        private router: Router,
        private snackBar: MatSnackBar
    ) {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        })
    }

    get email() {
        return this.loginForm.controls['username'];
    }
    get password() {
        return this.loginForm.controls['password'];
    }

    onSubmit() {
        if (this.loginForm.invalid) return

        const credentials = this.loginForm.value;

        this.authService.login(credentials).subscribe({
            next: (res: TokenResponse) => {
                this.authService.saveToken(res.token);
                this.authService.saveUserId(res.userId);
                this.router.navigate(['/']);
            },
            error: _ => {
                this.snackBar.open('Email ou senha inválidos', 'Fechar', {
                    duration: 3000,
                });

                this.loginForm.get('email')?.setErrors({invalid: true});
                this.loginForm.get('password')?.setErrors({invalid: true});
            }
        })

    }

    redirectToRegister() {
        this.router.navigate(['/register']);
    }

}
