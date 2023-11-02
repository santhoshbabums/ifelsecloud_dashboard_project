import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topdatacard',
  templateUrl: './topdatacard.component.html',
  styleUrls: ['./topdatacard.component.scss']
})
export class TopdatacardComponent implements OnInit {

  topcard : any = [];


  constructor ( private userService : UserService){

  }
  ngOnInit(): void {
    this.userService.getCurrentuserDetails().subscribe((response:any)=>{
      console.log(response)
      this.topcard = response.top_cards
    },(error:any)=>{
      console.log(error)
    })
  }



}
