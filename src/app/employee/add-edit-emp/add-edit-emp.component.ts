import { Component, OnInit, Input } from '@angular/core';
import{GlobalserviceService} from 'src/app/globalservice.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service: GlobalserviceService) {
   }
  @Input() emp:any;
  EmployeeID: number = 0;
  EmployeeName: string = '';
  Department: string = '';
  DateOfJoining: string = '';
  PhotoFilePath: string = '';
  PhotoFileName: string = '';

  departmentList: any=[];
  val:any;

 ngOnInit(): void {
this.loadDepartmentList();
 }
 loadDepartmentList(){
   this.service.getAllDepartmentsNames().subscribe((data:any)=>{
     this.departmentList = data;
     this.EmployeeID = this.emp.EmployeeID;
     this.EmployeeName = this.emp.EmployeeName;
     this.Department = this.emp.Department;
     this.DateOfJoining = this.emp.DateOfJoining;
     this.PhotoFileName = this.emp.PhotoFileName;
    // this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
   })
 }
 addEmployee(){
 this.val = {EmployeeID:this.EmployeeID,
             EmployeeName: this.EmployeeName,
             Department: this.Department,
             DateOfJoining:this.DateOfJoining,
             PhotoFileName: this.PhotoFileName};
            this.service.addEmp(this.val).subscribe(res=>{
              alert(res.toString());            
            });
 }
 updateEmployee(EmployeeID: number){
  var val = {
    EmployeeID:EmployeeID,
    EmployeeName: this.emp.EmployeeName,
    Department: this.emp.Department,
    DateOfJoining:this.emp.DateOfJoining,
    PhotoFileName: this.emp.PhotoFileName};
     this.service.updateEmp(val).subscribe(res=>{
       alert(res.toString());
     });

 }
 //uploadPhoto(event:any){
  // var file= event.target.file[0];
  // const formData:FormData=new FormData();
  // formData.append('uploadedFile',file,file.name);
 //  this.service.uploapPhoto(formData).subscribe((data:any)=>{

   // this.PhotoFileName = data.toString();
  //  this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
  // })}

}

