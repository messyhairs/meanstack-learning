import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userforms: FormGroup;
  error: any;
  public isMobilevar = false;
  constructor(private router: Router, private services: AuthService, private formbuilder: FormBuilder, private toastr: ToastrManager) { }

  ngOnInit(): void {
    this.userforms = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }
  formsubmit() {
    this.services.cerateaccount(this.userforms.value).subscribe(result => {
      this.toastr.infoToastr('Howdy' + ' ' + this.userforms.value.name + ' ' + 'you successfully registered', 'Howdy', {
        position: 'bottom-left',
      });
      // this.userforms.reset();
      this.router.navigateByUrl('/login');
    },
      err => {
        this.error = err.error;
        console.log(this.error);
        this.toastr.errorToastr(this.error, 'Warning', {
          position: 'bottom-left'
        });
      });
  }

}
