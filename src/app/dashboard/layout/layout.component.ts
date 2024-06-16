import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dashboard-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dashboard: DashboardService
  ) {
    this.router.events.subscribe((event: Event) => {
      this.dashboard.setCurrentRoute(this.router.url);
      if (event instanceof NavigationEnd) {
        if (this.dashboard.sidebarOpen && window.innerWidth < 1024) {
          this.dashboard.closeSidebar();
        }
      }
    });
  }

  ngOnInit() {
    // set the html tag attribute overflow to hidden when component is mounted
    document.documentElement.style.overflow = 'hidden';
  }

  onSubmit() {
    const loginData = { email: this.email, password: this.password };
    this.http.post('http://localhost:3000/api/login', loginData).subscribe(
      (response: any) => {
        if (response.success) {
          alert('Login successful!')
          this.isLoggedIn = true;
          this.router.navigate(['admin/dashboard']);
        } else {
          alert('Login failed');
        }
      },
      (error) => {
        console.error('Login error', error);
        alert('An error occurred');
      }
    );
  }
}
