import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-jokes',
  templateUrl: './search-jokes.component.html',
  styleUrls: ['./search-jokes.component.css']
})
export class SearchJokesComponent implements OnInit {

  @Output() searchChange = new EventEmitter<string>();

  constructor() { }

  searchText: string;

  ngOnInit(): void {
  }
  onSubmit(){
    this.searchChange.emit(this.searchText);
  }

  setSearch(){
    
  }
}
