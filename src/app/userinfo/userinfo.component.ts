import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BasicapisService } from '../services/basicapis.service';
import { LoaderService } from '../services/loader.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  userdetails: any;
  arraydata: any = [];
  userdatas: any;
  finaldatas: any;
  userforms: FormGroup;
  error: any;
  public isMobilevar = false;
  useremail: any;
  status = true;

  constructor(private loader: LoaderService, private route: ActivatedRoute,
              private formbuilder: FormBuilder, private service: AuthService, private router: Router,
              private deviceService: DeviceDetectorService, private services: BasicapisService,
  ) {
    this.isMobile();
  }

  ngOnInit(): void {
    this.userdetails = localStorage.getItem('currentUser');
    this.arraydata.push(JSON.parse(this.userdetails));
    console.log(this.arraydata);
    // this.arraydata.push(datas);
    // this.arraydata.forEach(element => {
    //   console.log(element);
    // });
  }
  public isMobile() {
    this.isMobilevar = this.deviceService.isMobile();
  }
  logout() {
    this.service.logout();
    this.router.navigateByUrl('/');
  }
}