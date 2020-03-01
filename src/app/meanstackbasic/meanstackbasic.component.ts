import { Component, OnInit } from '@angular/core';
import { BasicapisService } from '../services/basicapis.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-meanstackbasic',
  templateUrl: './meanstackbasic.component.html',
  styleUrls: ['./meanstackbasic.component.scss']
})
export class MeanstackbasicComponent implements OnInit {
  userdatas: any;
  userdetails: any = [];
  finaldatas: any;

  constructor(private services: BasicapisService, private loader: LoaderService) { }

  ngOnInit(): void {
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
}
