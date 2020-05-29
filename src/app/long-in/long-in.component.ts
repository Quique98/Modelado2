import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgFlashMessageService } from "ng-flash-messages";
import { AuthService } from "../services/auth.service";
declare var $: any;
@Component({
  selector: "app-long-in",
  templateUrl: "./long-in.component.html",
  styleUrls: ["./long-in.component.css"],
})
export class LongInComponent implements OnInit {
  correo: String;
  contrasena: String;
  constructor(
    private auth: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router
  ) {}
  CambioDeUsuario = function () {
    var selectedCountry = $("#tipoUsuario").children("option:selected").val();
    if (selectedCountry === "Maestro") {
      $(".codigo").css("display", "none");
      $(".correo").css("display", "block");
      $(".clave").css("display", "block");
    } else {
      $(".codigo").css("display", "block");
      $(".correo").css("display", "none");
      $(".clave").css("display", "none");
    }
    console.log("cambio");
  };
  onLoginSubmit() {
    const user = {
      correo: this.correo,
      contrasena: this.contrasena,
    };
    this.auth.authUser(user).subscribe((data: any) => {
      if (data.success) {
        this.auth.storeUserData(data.token, data.user);
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Has iniciado sesión"],
          dismissible: true,
          timeout: 3000,
          type: "success",
        });
        this.router.navigate(["/home"]);
      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: [data.msg],
          dismissible: true,
          timeout: 3000,
          type: "danger",
        });
        this.router.navigate(["/login"]);
      }
    });
  }

  ngOnInit(): void {
    $(".codigo").css("display", "none");
  }
}
