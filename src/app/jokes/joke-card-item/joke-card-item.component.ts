import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-card-item',
  templateUrl: './joke-card-item.component.html',
  styleUrls: ['./joke-card-item.component.scss']
})
export class JokeCardItemComponent implements OnInit {
  @Input() joke: Joke;

  constructor() {}

  ngOnInit() {}
}
