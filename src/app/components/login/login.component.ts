import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = 'usuario';
  isLoggedIn = false;

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
