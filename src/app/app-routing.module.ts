import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
const routes: Routes = [
  {path:"employee",component: EmployeeComponent},
  {path:"department",component: DepartmentComponent}
 // {loadChildren: () => import('./department/add-edit-dep/add-edit-dep.component').then(m => m.AddEditDepComponent).catch( err => console.log('Oh no!') )},
 // {loadChildren: () => import('./department/show-dep/show-dep.component').then(m => m.ShowDepComponent).catch( err => console.log('Oh no!') )},
 // {loadChildren: () => import('./employee/add-edit-emp/add-edit-emp.component').then(m => m.AddEditEmpComponent).catch( err => console.log('Oh no!') )},
  //{loadChildren: () => import('./employee/show-emp/show-emp.component').then(m => m.ShowEmpComponent).catch( err => console.log('Oh no!') )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

