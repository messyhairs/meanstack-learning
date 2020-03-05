import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  showLoader: boolean;
  userdetails: any;
  arraydata: any = [];
  isShown = false; // hidden by default
  status: boolean;

  constructor(
    private loaderService: LoaderService, private service: AuthService, private router: Router) {
  }

  ngOnInit() {
  }
}
