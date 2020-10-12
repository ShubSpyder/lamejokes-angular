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
  loading = true;
  jokesNotFound = false;

  ngOnInit(): void {
    this.getAllJokes();
  }

  getSearchTerm(evt) {
    this.loading = true;
    this.jokesNotFound = false;
    this.jokeService.searchJokes(evt).then((res) => {
      this.allJokes = JSON.parse(JSON.stringify(res)).results;
      console.log('response on search ->', this.allJokes[0]);
      // this.allJokes !== null
      //   ? (this.loading = false)
      //   : this.allJokes === []
      //   ? (this.jokesNotFound = true)
      //   : (this.loading = false);

      if(this.allJokes !== null && this.allJokes[0] !== undefined){
        this.loading = false;
        this.jokesNotFound = false;
      }
      else if(this.allJokes[0] === undefined){
        this.jokesNotFound = true;
        this.loading = false;
      }
    });
  }
  getAllJokes() {
    this.jokeService.getJoke().then((res) => {
      this.allJokes = JSON.parse(JSON.stringify(res)).results;
      this.allJokes !== null ? (this.loading = false) : (this.loading = true);
    });
  }
}
