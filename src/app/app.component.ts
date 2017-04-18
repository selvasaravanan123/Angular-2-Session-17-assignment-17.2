import { Component } from '@angular/core';
import '../assets/css/styles.css';


@Component({
  selector: 'my-app',
  templateUrl: '/app.component.html',
  styles: [`main {
  padding: 1em;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 50px;
  display: block;
}`]
})
export class AppComponent { }