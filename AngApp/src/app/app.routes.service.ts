import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { SampleComponent } from './sample/sample.component';
import { ListCarComponent } from './cars/list-car/list-car.component';
import { EditCarComponent } from './cars/edit-car/edit-car.component';


const routes: Route[] = [
  { path: 'dashboards/v1', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'sample', component: SampleComponent },
  {
    path: 'dashboards',
    children: [{ path: 'v1', component: Dashboard1Component }]
  },
  {
    path: 'profiles',
    children: [{ path: 'profile1', component: Profile1Component }]
  },
  {
    path: 'tables',
    children: [{ path: 'table1', component: BasicTableComponent }]
  },
  { path: 'maps', children: [{ path: 'map1', component: Map1Component }] },
  {
    path: 'users',
    children: [
      { path: 'list-user', component: ListUserComponent },
      { path: 'edit-user', component: EditUserComponent }
    ]
  },

  {
    path: 'cars',
    children: [
      { path: 'list-car', component: ListCarComponent },
      { path: 'edit-car', component: EditCarComponent }
    ]
  },



  { path: 'modals', component: ModalsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];
export const routing = RouterModule.forRoot(routes);

export class AppRoutingModule {}
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
