import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class JokeService {
	constructor(private http: HttpClient) {}
	params:object = {headers: {Accept: "application/json"}}
	baseUrl = "https://icanhazdadjoke.com/"

	getJoke() {
		const randomNum = Math.random() * (25 - 4) + 4;
		const pageNum = (Math.round(randomNum)).toString();
		const url = `${this.baseUrl}search?page=${pageNum}`;
		return this.http.get(url, this.params).toPromise();
	}

	getSpecificJoke(id){
		const url = `${this.baseUrl}j/${id}`;
		return this.http.get(url, this.params).toPromise();
	}

	searchJokes(term){
		const url = `${this.baseUrl}search?term=${term}`;
		return this.http.get(url, this.params).toPromise();

	}
}
