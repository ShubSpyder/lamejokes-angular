import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { JokeComponent } from './jokes/joke/joke.component';
import { LaughableComponent } from './jokes/joke/laughable/laughable.component';
import { SearchJokesComponent } from './jokes/search-jokes/search-jokes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, JokesComponent, AboutComponent, JokeComponent, LaughableComponent, SearchJokesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PagesModule { }
