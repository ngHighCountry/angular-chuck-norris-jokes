import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokesModule } from './jokes/jokes.module';
import { JokeService } from './services/joke.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, JokesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [JokeService]
})
export class AppModule {}
