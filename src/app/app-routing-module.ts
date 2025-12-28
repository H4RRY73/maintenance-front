import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AssetList} from './maintenance/components/asset-list/asset-list';
import {MaintenanceForm} from './maintenance/components/maintenance-form/maintenance-form';
import {AssetForm} from './maintenance/components/asset-form/asset-form';


const routes: Routes = [
  { path: '', component: AssetList },
  { path: 'schedule/:id', component: MaintenanceForm},
  { path: 'assets/new', component: AssetForm }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
