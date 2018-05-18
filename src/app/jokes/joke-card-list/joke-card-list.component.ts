import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Joke } from '../../models';
import { JokeService } from '../../services';

@Component({
  selector: 'app-joke-card-list',
  templateUrl: './joke-card-list.component.html',
  styleUrls: ['./joke-card-list.component.css']
})
export class JokeCardListComponent implements OnInit {
  jokes$: Observable<Joke[]>;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.jokes$ = this.jokeService.getJokes();
  }

  refreshJokes() {
    this.jokes$ = this.jokeService.getJokes();
  }
}