import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BasicapisService } from '../services/basicapis.service';
import { LoaderService } from '../services/loader.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userdetails: any;
  arraydata: any = [];
  userdatas: any;
  finaldatas: any;
  userforms: FormGroup;
  error: any;
  public isMobilevar = false;
  useremail: any;

  constructor(private loader: LoaderService,
    private formbuilder: FormBuilder, private service: AuthService, private router: Router,
    private deviceService: DeviceDetectorService, private services: BasicapisService,
  ) {
    this.isMobile();
  }

  ngOnInit(): void {
    this.userdetails = localStorage.getItem('currentUser');
    this.arraydata.push(JSON.parse(this.userdetails));
    this.arraydata.forEach(element => {
      console.log(element.email);
      this.useremail = element.email;
    });
    this.userforms = this.formbuilder.group({
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      useremail: [this.useremail]
    });
    console.log(this.useremail);
  }
  public isMobile() {
    this.isMobilevar = this.deviceService.isMobile();
  }
  logout() {
    this.service.logout();
    this.router.navigateByUrl('/');
  }
  moredetails() {
    this.services.addmoredetails(this.userforms.value).subscribe(result => {
      this.loader.display(true);
      console.log(result);
      this.loader.display(false);
      // this.toastr.infoToastr('Howdy' + ' ' + this.userforms.value.username + ' ' + 'you successfully registered', 'Howdy', {
      //   position: 'bottom-left',
      // });
      this.userforms.reset();
    },
      err => {
        this.error = err.error;
        console.log(this.error);
        // this.toastr.errorToastr(this.error, 'Warning', {
        //   position: 'bottom-left'
        // });
      });
  }
}
