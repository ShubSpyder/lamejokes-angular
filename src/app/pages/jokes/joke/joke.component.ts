import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-joke',
	templateUrl: './joke.component.html',
	styleUrls: ['./joke.component.css'],
})
export class JokeComponent implements OnInit {
	@Input() joke: string;
	@Input() id: string;

	constructor(private router : Router) {}

	ngOnInit(): void {
		// console.log(this.id, typeof(this.id))
	} 

	openJoke = (id) => this.router.navigate(['/laughable', id]);
}
