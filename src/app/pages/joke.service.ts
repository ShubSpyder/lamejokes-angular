import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class JokeService {
	constructor(private http: HttpClient) {}
	params:object = {headers: {Accept: "application/json"}}

	getJoke() {
		const url = "https://icanhazdadjoke.com/search?page=4";
		return this.http.get(url, this.params).toPromise();
	}

	getSpecificJoke(id){
		const url = `https://icanhazdadjoke.com/j/${id}`;
		return this.http.get(url, this.params).toPromise();
	}

	searchJokes(term){
		const url = `https://icanhazdadjoke.com/search?term=${term}`;
		return this.http.get(url, this.params).toPromise();

	}
}
