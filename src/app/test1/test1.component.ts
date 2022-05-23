import { HtmlParser } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Attribute, Component, Input, OnInit } from '@angular/core';

import { sample } from 'rxjs';

@Component({
  selector: 'app-test1',
  // templateUrl: './test1.component.html',
  template:`
          <div>Welcome {{name}}</div>
          <h2 class="text-success">Sophiya</h2>
          <h2 [class]="successClass">Sophiya</h2>
          <h2 [class]="successClass" class="text-special">Sophiya</h2>
          <h2 [class.text-danger]="hasError">Sophiya</h2>
          <h2 [ngClass]="messageClass">Sophiya</h2>
          <h2 [style.color]="'orange'">STYLE BINDING</h2>
          <h2 [ngStyle]="styleObj">STYLE BINDING-style object</h2>
          <h2 [style.color]="highlightColor">STYLE BINDING-user defined</h2>
          <h2 [style.color]="hasError?'red':'green'">STYLE BINDING</h2>
          <input [id]="myId" type="text" value="Sophiya">
          <input bind-disabled="isDisabled" id="{{myId}}" type = "text" value="Sophiya">
          <button (click)="onClick()">Click me</button>
          <button (click)="onClick1($event)">Click me1</button>
          <button (click)="greeting = 'Welcome Sophiya'">Click me2</button>
          

          <input #myInput type="text">
          <button (click)="logMessage(myInput.value)">Log</button>
          {{greeting}}
          <input [(ngModel)]="name" type ="text">
          
          `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
// notes: this {{}} is called interpolation in angular 
//that can have expression, operation over string arrays, and operations
//can't access global js variable like window .. etc.
//can't assign values.

//PROPERTY BINDING
// on changes the attribute values don't change but the DOM property changes.
// for ex: for <input type="text" value="sophiya"> if I change the value of value
// then the getAttribute('value') gives sophiya but the dom property that is Input.value
// will give the changed Value.
// 1} Attributes and Properties are not the sample;
// 2} Attribute-Html
// 3} Properties-DOM
// 4} Attribute initialize dom propeties and then they are done 
//    Attribute values can't change but property values change.

// So here PROPERTY GREEN is done in three ways:
//1) [id]="myId"
//2) id="{{myId}}"
//3) bind-id="myId"
//in case of boolean properties: 2) does not work so we use 1) & 3)

//ok so property-binding, class-binding, style-binding are used in 
//data dinding that is changes in classes are shown to the html template 
// but for other way round we need to do event binding 
// i.e.:changes in html template should rreflect to class components as well.

//template refernece variables: used to give user values typed in 
// html  to the classes

// two way binding: [()]


export class Test1Component implements OnInit {

  name="Sophiya";
  myId='testId';
  successClass="text-success";
  isDisabled=false;
  hasError=true;
  isSpecial = true;
  highlightColor="orange";
  public messageClass = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special":this.isSpecial
  }
  public styleObj = {
    color:"blue",
    fontStyle:"italic"
  }
  onClick(){
    console.log("Hello its me");
    this.greeting="Hello its me ";
  }
  greeting="";
  onClick1(event : Event){
    console.log(event);
    this.greeting=event.type;
  }
  logMessage(value : string)
  {
    console.log(value);
    this.greeting = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
