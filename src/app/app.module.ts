import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExternalLinkDirective } from './directives/external-link.directive';

@NgModule({
  declarations: [ExternalLinkDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class AppModule { }
