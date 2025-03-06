import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmListComponent } from './atm-list/atm-list.component';

const routes: Routes = [{path: '', component: AtmListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
