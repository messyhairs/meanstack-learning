import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userdetails: any;
  arraydata: any = [];

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  logout() {
    this.service.logout();
    this.router.navigateByUrl('/');
  }
}
