import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPagePage } from './register-page.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPagePageRoutingModule {}
