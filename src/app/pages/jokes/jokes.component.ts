import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { config } from 'rxjs';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokesComponent implements OnInit {
  allJokes: object[];
  constructor(private jokeService: JokeService) {}
  yoke: string = 'The fist said fish';

  ngOnInit(): void {
    this.getAllJokes();
  }

  getSearchTerm(evt){
    this.jokeService.searchJokes(evt).then((res) => {
      this.allJokes = JSON.parse(JSON.stringify(res)).results;
      console.log(`searched jokee -> ${this.allJokes}`)
    });
  }
  getAllJokes(){
    this.jokeService.getJoke().then((res) => {
      this.allJokes = JSON.parse(JSON.stringify(res)).results;
    });
  }
}
