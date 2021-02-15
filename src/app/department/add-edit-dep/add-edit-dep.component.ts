import { Component, OnInit, Input } from '@angular/core';
import{GlobalserviceService} from 'src/app/globalservice.service';
@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service: GlobalserviceService) { 
  }
   @Input() dep:any;
   DepartmentID: number = 0;
   DepartmentName: string = '';
   val: any;
  ngOnInit(): void {
  }
  addDepartment(){
    this.val = {
    DeparmentID:this.DepartmentID,
             DepartmentName: this.DepartmentName};
             this.service.addDeparment(this.val).subscribe(res=>{
               alert(res.toString());        
             });
         
  }
  updateDepartment(DepartmentID: number){
    var val = {
               DepartmentID: DepartmentID,
               DepartmentName: this.dep.DepartmentName};
                 this.service.updateDeparment(val).subscribe(res=>{
                   alert(res.toString());         
                 });
  }
}

