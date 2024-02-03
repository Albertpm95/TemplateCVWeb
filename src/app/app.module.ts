import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ExternalLinkDirective } from "./directives/external-link.directive";

@NgModule({
  declarations: [ExternalLinkDirective],
  imports: [BrowserModule, AppComponent],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
