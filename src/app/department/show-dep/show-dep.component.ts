import { Component, OnInit } from '@angular/core';
import {GlobalserviceService} from 'src/app/globalservice.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css'],
})
export class ShowDepComponent implements OnInit {

  constructor(private service:GlobalserviceService) {
    this.refreshDepList();
   }
  DepartmentList: any =[];
  ModalTitle: string | undefined;
  ActivateAddEditDepCom: boolean = true;
  dep: any;

  ngOnInit(): void {
    this.refreshDepList();
  }
  closeClick(){
    this.ActivateAddEditDepCom = false;
    this.refreshDepList();
    }
 
  addClick(){
     this.dep = {
     DepartmentID: 0,
     DepartmentName:""
        }
       
       this.ModalTitle = "Add Department"
    }

    deleteClick(item :any){
    if(confirm("are you sure?")){
      this.service.deleteDeparment(item.DepartmentID).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      });
     }
    }
    editClick(item:any){
     this.dep = item;
     this.ModalTitle = "Edit Department";
    }
  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList  = data;
      this.ActivateAddEditDepCom= true;
    });
  }

}

