import { NgModule }             from '@angular/core';
import { UserCreateComponent }   from './user-create/user-create.component';
// 1. Routing Libraries
import { RouterModule, Routes } from '@angular/router';
import { UserViewComponent }   from './user-view/user-view.component';

import { UsersComponent }   from './users/users.component';
import { UserEditComponent }   from './user-edit/user-edit.component';

// 3. Declare your routes
const routes: Routes = [
  // 4. The default route 
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: UsersComponent },
    { path: 'users/view/:id', component: UserViewComponent },
    { path: 'users/create', component: UserCreateComponent },
    { path: 'users/edit/:id', component: UserEditComponent },

  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
