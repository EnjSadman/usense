import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  passwordStatus = "empty";
  regStrongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
  regMediumPassword = new RegExp('(?=.{8,})(?=.*[a-z])(?=.*[0-9])');
  regOnlyNums = new RegExp('(?=.{8,})(?=.*[0-9])');
  regOnlyLetters = new RegExp('(?=.{8,})(?=.*[a-z])');
  regOnlySymbols = new RegExp('(?=.{8,})(?=.*[^A-Za-z0-9])');


  onInputChange(value: string): void {
    if (value.length < 8 && value.length > 0) {
      this.passwordStatus = "smaller_than_eight"
    } else {
      if (this.regStrongPassword.test(value)) {
        this.passwordStatus = "strong"
      } else if (this.regMediumPassword.test(value.toLowerCase())) {
        this.passwordStatus = "medium";
      } else if (value.length == 0){
        this.passwordStatus = "empty";
      } else {
        this.passwordStatus = "easy";
      }

    }
  }
}
