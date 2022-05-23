import { Component } from '@angular/core';
//decorator tells angular that it is a componenet
@Component({
  selector: 'app-root',
  //this selector can select in three ways: 
  //1) selecting a html tag: selector: 'app-root'
  //2) selecting a html class: selector: '.app-root'
  //3) selecting a html attribute: selector: '[app-root]'
  templateUrl: './app.component.html',
  //for template url: instead we can also use just template for //inline html like : template: `<div>inline template</div>`
  // its the backticks '`'
  styleUrls: ['./app.component.css']
  //for style url: instead we can also use just styles for 
  //inline style like : styles: [`
  //div{
  //color: red;
  //}
  //`]
})
export class AppComponent {
  title = 'hello-world';
  public name ="Sophiya";
  public message = "";

}
