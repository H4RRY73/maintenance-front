import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {HttpClientModule} from '@angular/common/http';
import { AssetList } from './maintenance/components/asset-list/asset-list';
import { MaintenanceForm } from './maintenance/components/maintenance-form/maintenance-form';
import { AssetForm } from './maintenance/components/asset-form/asset-form';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AssetList,
    MaintenanceForm,
    AssetForm
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
