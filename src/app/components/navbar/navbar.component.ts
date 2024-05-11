import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private dialog: MatDialog) {}

  openLoginModal(): void {
    this.dialog.open(LoginComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
    });
  }
}
