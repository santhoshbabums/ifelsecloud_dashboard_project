import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-new-user-registration',
  templateUrl: './new-user-registration.component.html',
  styleUrls: ['./new-user-registration.component.scss']
})
export class NewUserRegistrationComponent implements OnInit{


  new_registered_users :any = []

  constructor(

    public userService : UserService
    
  ) { }



  ngOnInit(): void {
    this.tableData()
   
  }

  tableData(){
    this.userService.getCurrentuserDetails().subscribe((response:any)=>{
      this.new_registered_users =response.new_users;
    },(error:any)=>{
      console.log(error)
    })
  }



}
