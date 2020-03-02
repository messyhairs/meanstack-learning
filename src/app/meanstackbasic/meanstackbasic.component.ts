import { Component, OnInit } from '@angular/core';
import { BasicapisService } from '../services/basicapis.service';
import { LoaderService } from '../services/loader.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meanstackbasic',
  templateUrl: './meanstackbasic.component.html',
  styleUrls: ['./meanstackbasic.component.scss']
})
export class MeanstackbasicComponent implements OnInit {
  userdatas: any;
  userdetails: any = [];
  finaldatas: any;
  userforms: FormGroup;
  error: any;
  public isMobilevar = false;


  constructor(private deviceService: DeviceDetectorService,
    private services: BasicapisService,
    private loader: LoaderService,
    private formbuilder: FormBuilder,
    public toastr: ToastrManager
  ) {
    this.isMobile();
  }

  ngOnInit(): void {
    this.userforms = this.formbuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
    });
  }
  public isMobile() {
    this.isMobilevar = this.deviceService.isMobile();
  }
  getdatas() {
    this.services.getuserdetails().subscribe(result => {
      this.userdatas = result;
      this.userdetails.push(this.userdatas);
      this.loader.display(true);
      this.userdetails.forEach(element => {
        console.log(element.userdetails);
        this.finaldatas = element.userdetails;
        this.loader.display(false);
      });
    });
  }
  formsubmit() {
    this.services.addusers(this.userforms.value).subscribe(result => {
      this.loader.display(true);
      console.log(result);
      this.loader.display(false);
      this.toastr.infoToastr('Howdy' + ' ' + this.userforms.value.username + ' ' + 'you successfully registered', 'Howdy', {
        position: 'bottom-left',
      });
      this.userforms.reset();
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
