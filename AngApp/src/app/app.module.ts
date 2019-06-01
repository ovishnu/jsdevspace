import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './views/errors/error.module';
// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';

import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { GrowlModule} from 'ngx-growl';
import { ListUserComponent } from './users/list-user/list-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { SampleComponent } from './sample/sample.component';
import { CarService } from './service/car.service';
import { ListCarComponent } from './cars/list-car/list-car.component';
import { EditCarComponent } from './cars/edit-car/edit-car.component';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { ShowCustomersComponent } from './customers/show-customers/show-customers.component';
import { SearchCustomersComponent } from './customers/search-customers/search-customers.component';
import { ElasticsearchService } from './service/elasticsearch.service';



@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EditUserComponent,
    SampleComponent,
    ListCarComponent,
    EditCarComponent,
    AddCarComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    ShowCustomersComponent,
    SearchCustomersComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutes,
    RouterModule,
    FormsModule,
    SharedModule,
    ViewsModule,
    ErrorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [UserService, CarService, ElasticsearchService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
