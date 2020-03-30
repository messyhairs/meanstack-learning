import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:5000/twingsound/us-central1/app/image/upload';
// const URL = 'http://localhost:8000/api/upload';

@Component({
  selector: 'app-imageserver',
  templateUrl: './imageserver.component.html',
  styleUrls: ['./imageserver.component.scss']
})
export class ImageserverComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image'
  });

  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
      console.log('File successfully uploaded!');
    };
  }


}
