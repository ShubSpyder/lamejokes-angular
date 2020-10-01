import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openHome = () => this.router.navigate([""]);
  openJokes = () => this.router.navigate(["jokes"]);
  openAbout = () => this.router.navigate(["about"]);
}
