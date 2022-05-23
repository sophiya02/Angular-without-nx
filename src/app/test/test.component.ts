import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template:`
       <h2>Hello {{name}}</h2>
       <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 @Input('parentData') name: string ="";

 @Output() childEvent = new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit("hey Sofi");
  }
   
}
