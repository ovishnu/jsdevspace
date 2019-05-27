
import { Component, OnInit } from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
 selector: "app-sample",
 templateUrl: "./sample.component.html",
})
export class SampleComponent implements OnInit {
 constructor() {}

 // name : String;

 user: Object = {};

 ngOnInit() {
   this.user = {
     name: "John"
   };
 }

 onSubmit() {
   console.log(this.user);
 }
}
