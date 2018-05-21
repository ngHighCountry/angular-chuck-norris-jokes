import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatProgressBarModule } from '@angular/material';

import { JokeCardItemComponent } from './joke-card-item/joke-card-item.component';
import { JokeCardListComponent } from './joke-card-list/joke-card-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  declarations: [JokeCardItemComponent, JokeCardListComponent],
  exports: [JokeCardItemComponent, JokeCardListComponent]
})
export class JokesModule {}
