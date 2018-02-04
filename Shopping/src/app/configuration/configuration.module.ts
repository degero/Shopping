import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationMainComponent } from './configuration-main/configuration-main.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigurationRoutingModule
  ],
  declarations: [ConfigurationMainComponent]
})
export class ConfigurationModule { }
