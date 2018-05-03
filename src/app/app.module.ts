import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JokesModule } from './jokes/jokes.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    JokesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
