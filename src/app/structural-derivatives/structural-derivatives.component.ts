import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-derivatives',
  // templateUrl: './structural-derivatives.component.html',
  template:`
    <h2 *ngIf="displayMe ; else elseBlock ">
    Sophiya Singh
    </h2>
    <ng-template #elseBlock>
    <h2 >
    Name is hidden1
    </h2>
    </ng-template>
    <div *ngIf="displayMe ; then thenBlock; else elseBlock1 "></div>
    <ng-template #thenBlock>
    <h2 >
    Sophiya
    </h2>
    </ng-template>
    <ng-template #elseBlock1>
    <h2 >
    Name is hidden2
    </h2>
    </ng-template>

    <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red</div>
    <div *ngSwitchCase="'blue'">You picked blue</div>
    <div *ngSwitchCase="'green'">You picked green</div>
    <div *ngSwitchDefault>Pick Again</div>
    </div>

    <div *ngFor="let color of colors; index as i; first as f; last as l; odd as o; even as e">
      <h2>index:{{i}} color:{{color}} first:{{f}} last{{l}} odd:{{o}} even:{{e}}</h2>
    </div>
  `,
  styleUrls: ['./structural-derivatives.component.css']
})
export class StructuralDerivativesComponent implements OnInit {

  public colors=["red", "blue", "green", "yellow"]
  color="";
  displayMe=false;
  constructor() { }

  ngOnInit(): void {
  }

}
