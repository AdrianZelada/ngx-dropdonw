import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { DropdownSelectModule } from './dropdown-select/dropdown-select.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DropdownSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
