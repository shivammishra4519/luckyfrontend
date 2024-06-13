import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-set-commession',
  templateUrl: './set-commession.component.html',
  styleUrl: './set-commession.component.css'
})
export class SetCommessionComponent {
  constructor(private builder:FormBuilder) {
    this.userSetting()
   }
 
isSmsSend=false;
isUserSetting=false;


  sendSms(){
  
    this.isSmsSend=true;
    this.isUserSetting=false;

  };

  userSetting(){
    
    this.isSmsSend=false;
    this.isUserSetting=true;
   
  };

 

  onSubmit() {
    alert(`Name: , Lucky Number: `);
  }

  onSelectUser(){

  }
}
