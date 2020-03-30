import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ng6-toastr-notifications';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth.guard';
import { MeanstackbasicComponent } from './meanstackbasic/meanstackbasic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { ImageserverComponent } from './imageserver/imageserver.component';

@NgModule({
  declarations: [
    AppComponent,
    MeanstackbasicComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    UserinfoComponent,
    EditdetailsComponent,
    ImageserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DeviceDetectorModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FileUploadModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
