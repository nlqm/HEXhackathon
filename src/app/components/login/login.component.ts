import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const loginData = { email: this.email, password: this.password };
    this.http.post('http://localhost:3000/api/login', loginData).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigate(['/dashboard']);
        } else {
          alert('Login failed');
        }
      },
      (error) => {
        console.error('Login error', error);
        alert('An error occured');
      }
    );
  }
}
