import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
  
      this.authService.authenticate(username, password).subscribe({
        next: (response) => {
          if (response.authenticated) {
            this.authService.loggedIn = true;
 
            this.router.navigate(['/app-Info']);
          
          } else {
           
            this.errorMessage = 'Invalid username or password';
          }
        },
        error: (error) => {
          this.errorMessage = 'An error occurred. Please try again.';
        }
    });
    }
  }
}
