import { Component } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserResponse} from "../../../model/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    loginForm: FormGroup;

    constructor(
        private authService: AuthService,
        private fb: FormBuilder,
        private router: Router,
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        })
    }

    get email() {
        return this.loginForm.controls['email'];
    }
    get password() {
        return this.loginForm.controls['password'];
    }

    onSubmit() {
        if (this.loginForm.invalid) return

        const credentials = this.loginForm.value;

        this.authService.register(credentials).subscribe({
            next: (_: UserResponse) => {
                this.router.navigate(['/login']);
            },
            error: _ => {}
        })

    }

    redirectToLogin() {
        this.router.navigate(['/login']);
    }
}
