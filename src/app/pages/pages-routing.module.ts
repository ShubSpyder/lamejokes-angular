import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';
import { AboutComponent } from './about/about.component';
import { LaughableComponent } from './jokes/joke/laughable/laughable.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'jokes',
    component: JokesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'laughable/:id',
    component: LaughableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
