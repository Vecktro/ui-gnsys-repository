import { Component, OnInit } from '@angular/core';
import {GlobalserviceService} from 'src/app/globalservice.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {


  constructor(private service:GlobalserviceService) {
    this.refreshEmpList();
   }
  EmployeeList: any =[]
  ModalTitle: string | undefined;
  ActivateAddEditEmpCom: boolean = true;
  emp: any;

  ngOnInit(): void {
    this.refreshEmpList();
  }
  closeClick(){
    this.ActivateAddEditEmpCom = false;
    this.refreshEmpList();
    }
 
  addClick(){
     this.emp = {
     EmployeeID: 0,
     EmployeeName:"",
     Department: "",
     DateOfJoining: "",
     PhotoFileName:"anonymous.png"
        }
       this.ModalTitle = "Add Employee"
       this.ActivateAddEditEmpCom= true;
    }

    deleteClick(item :number){
    if(confirm("are you sure?")){
      this.service.deleteEmp(item).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      });
     }
    }
    editClick(item:any){
     this.emp = item;
     this.ModalTitle = "Edit Employee";
     this.ActivateAddEditEmpCom= true;
    }
    refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList  = data;
    });



  }

}

