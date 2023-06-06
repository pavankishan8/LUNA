import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent {

  constructor(private router: Router) {}

ngOnInit(): void{

}

Login(){
}

SeeMe(){
  window.open('http://localhost:53490');
}

}
