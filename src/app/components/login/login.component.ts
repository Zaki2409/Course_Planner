import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
onClick() {
throw new Error('Method not implemented.');
}

  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
