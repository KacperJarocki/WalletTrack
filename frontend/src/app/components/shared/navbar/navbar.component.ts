import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { LandingPageComponent } from "../../landing-page/landing-page.component";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    RouterLink,
    NgClass,
    LandingPageComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLoggedIn: boolean = true;

  logout(){
    console.log("Logout clicked")
    this.isLoggedIn = !(this.isLoggedIn);
  }
}
