import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BasicapisService } from '../services/basicapis.service';
import { LoaderService } from '../services/loader.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.scss']
})
export class EditdetailsComponent implements OnInit {
  userdetails: any;
  arraydata: any = [];
  userdatas: any;
  finaldatas: any;
  userforms: FormGroup;
  error: any;
  public isMobilevar = false;
  useremail: any;
  status = true;
  name: any;
  email: any;

  constructor(private loader: LoaderService, private route: ActivatedRoute,
    private formbuilder: FormBuilder, private service: AuthService, private router: Router,
    private deviceService: DeviceDetectorService, private services: BasicapisService,
  ) {
    this.isMobile();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.services.edituserinfo(params['id']).subscribe(res => {
        this.userdetails = res;
        this.name = this.userdetails.name;
        this.email = this.userdetails.email;
      });
    });
    this.userforms = this.formbuilder.group({
      name: [''],
      email: [''],
      mobilenumber: ['', Validators.required]
    });
  }
  public isMobile() {
    this.isMobilevar = this.deviceService.isMobile();
  }
  logout() {
    this.service.logout();
    this.router.navigateByUrl('/');
  }
  updateuser() {
    this.route.params.subscribe(params => {
      this.services.updateuser(this.userforms.value, params['id']);
    });
  }
}
