import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeCardListComponent } from './joke-card-list/joke-card-list.component';
import { JokeCardItemComponent } from './joke-card-item/joke-card-item.component';
import { JokeService } from './joke.service';

@NgModule({
  imports: [CommonModule],
  declarations: [JokeCardListComponent, JokeCardItemComponent],
  exports: [JokeCardListComponent, JokeCardItemComponent],
  providers: [JokeService]
})
export class JokesModule {}
