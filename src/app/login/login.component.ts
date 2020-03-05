import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userforms: FormGroup;
  error: any;
  returnUrl: string;
  public isMobilevar = false;
  constructor(private deviceService: DeviceDetectorService,
              private router: ActivatedRoute,
              private services: AuthService,
              private formbuilder: FormBuilder,
              private toastr: ToastrManager,
              private routes: Router) { }

  ngOnInit(): void {
    this.userforms = this.formbuilder.group({
      // name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
    this.isMobile();
  }
  login() {
    this.services.login(this.userforms.value).subscribe(result => {
      this.toastr.infoToastr('Howdy' + ' ' + this.userforms.value.email + ' ' + 'you successfully loggedin', 'Howdy', {
        position: 'bottom-left',
      });
      // this.userforms.reset();
      this.routes.navigate(['/userinformation']);

    },
      err => {
        this.error = err.error;
        console.log(this.error);
        this.toastr.errorToastr(this.error.message, 'Warning', {
          position: 'bottom-left'
        });
      });
  }
  public isMobile() {
    this.isMobilevar = this.deviceService.isMobile();
  }
}
