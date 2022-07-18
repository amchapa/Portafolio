import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TopbarComponent, HomeComponent, ToggleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
