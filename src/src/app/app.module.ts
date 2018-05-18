import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JokeService } from './services/joke.service';

import { JokesModule } from './jokes/jokes.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, JokesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [JokeService]
})
export class AppModule { }
