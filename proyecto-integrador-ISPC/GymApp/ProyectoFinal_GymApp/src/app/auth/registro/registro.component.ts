import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  
  constructor() { }
  signup:FormGroup|any;

  ngOnInit(): void {
  this.signup = new FormGroup({
  'fname' : new FormControl(),
  'fapellido': new FormControl(),
  'email': new FormControl(),
  'password' : new FormControl()
  })

}

  signupdata(signup:FormGroup) {
    console.log(this.signup.value);
    
  }
}