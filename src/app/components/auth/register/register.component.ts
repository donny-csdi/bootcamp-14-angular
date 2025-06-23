import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
    user = {
      email: '',
      password: ''
    }

    constructor(
      private authService: AuthService,
      private router: Router
    ){}

    async onSubmit() {
      try {
        const {email, password} = this.user
        await this.authService.register(email, password)
        this.router.navigate(['/login'])
      } catch (error) {
        console.error('Registration Error:', error)
      }
    }
}
