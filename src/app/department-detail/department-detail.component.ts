import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap,  Router} from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
    You selected department with id = {{departmentId}}
    </h3>
    <p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click)="goPrevious()">Previous </button>
    <button (click)="goNext()">Next</button>
    </p>
    <div>
    <button (click)="goToDep()">Back</button>
    </div> 
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  departmentId:number=0;
  constructor( private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // let id= parseInt(this.route.snapshot.params['id']);
    // this.departmentId=id;
    // this snapshot has a drawback that it won't retreive the url every time 
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id') as string);
      this.departmentId=id;
      console.log(params);
    })
  }
  goPrevious(){
    let prevId=this.departmentId-1;
    this.router.navigate(['/departments', prevId]);
  }
  goNext(){
    let nextId= this.departmentId+1;
    this.router.navigate(['/departments', nextId]);
  }
  goToDep(){
    let selectedId = this.departmentId?this.departmentId:null;
    // this.router.navigate(['/departments',{id:selectedId}])
    this.router.navigate(['../'], {relativeTo:this.route});
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route})
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route})
  }

}
