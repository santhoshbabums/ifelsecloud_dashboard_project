import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss']
})
export class RecentOrderComponent implements OnInit {
  displayColumns: string[] = ['#','Customer', 'Product', 'Deliver Date', 'Status', 'Tracking No #', 'shipping','close']
  dataSource: any;

  constructor(

    public userService : UserService
    
  ) { }



  ngOnInit(): void {
    this.tableData()
   
  }

  tableData(){
    this.userService.getCurrentuserDetails().subscribe((response:any)=>{
      this.dataSource = new MatTableDataSource(response.recent_orders);
    },(error:any)=>{
      console.log(error)
    })
  }
}
