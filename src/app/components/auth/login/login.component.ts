import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup
  isLoading = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  async onSubmit(){
    if (this.loginForm.valid && !this.isLoading){
      try{
        this.isLoading = true;
        const {email, password} = this.loginForm.value;
        await this.authService.login(email, password)
        this.isLoading = false
        this.router.navigate(['/'])
      } catch (error) {
        this.isLoading = false
      }
    }
  }
}
