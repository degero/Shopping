import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationMainComponent } from './configuration-main/configuration-main.component';

const routes: Routes = [
  { path: '', component: ConfigurationMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
