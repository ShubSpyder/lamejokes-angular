import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JokeService } from '../../../joke.service';

@Component({
  selector: 'app-laughable',
  templateUrl: './laughable.component.html',
  styleUrls: ['./laughable.component.css'],
})
export class LaughableComponent implements OnInit, OnDestroy {
  private sub: any;
  id: any;
  some: any;
  joke: string;

  constructor(
    private route: ActivatedRoute,
    private jokeService: JokeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.jokeService.getSpecificJoke(this.id).then((res) => {
      this.joke = JSON.parse(JSON.stringify(res)).joke;
      console.log(this.joke)
    });
    
  }
  ngOnDestroy(): void {}
}
