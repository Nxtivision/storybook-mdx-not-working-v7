import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  template: `
    <h1 style="color: darkblue">Example B</h1>
  `,
  standalone: true,
  imports: [CommonModule]
})
export default class ExampleBComponent { }
