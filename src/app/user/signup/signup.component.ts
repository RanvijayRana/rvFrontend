import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName : String = "";
  lastName : String = "";
  mobile : Number;
  userName : String = "";
  password : String = "";
  jobBand : Number;

  constructor() { }

  ngOnInit() {
  }
  
  public onSubmit : any = () => {
    console.log('form submitted');
  }

}
