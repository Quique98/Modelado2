import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgFlashMessageService } from "ng-flash-messages";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  seccion: String = "Perfil";
  user: Object;
  constructor(
    private auth: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router
  ) {}
  sidebarNavigate(valor) {
    this.seccion = valor;
  }
  onLogoutClick() {
    this.auth.logout();
    this.router.navigate(["/login"]);
    return false;
  }
  ngOnInit(): void {
    this.auth.getProfile().subscribe(
      (profile: any) => {
        this.user = profile.user;
      },
      (err) => {
        console.log(err);
        return false;
      }
    );
  }
}
