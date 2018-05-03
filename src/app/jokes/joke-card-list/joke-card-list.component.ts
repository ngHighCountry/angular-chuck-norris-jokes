import { Component, OnInit, Input } from '@angular/core';
import { Joke, JokeResult } from '../joke';
import { Observable } from 'rxjs/Observable';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke-card-list',
  templateUrl: './joke-card-list.component.html',
  styleUrls: ['./joke-card-list.component.scss']
})
export class JokeCardListComponent implements OnInit {
  jokes$: Observable<JokeResult>;
  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.jokes$ = this.jokeService.getJokes();
  }
}
