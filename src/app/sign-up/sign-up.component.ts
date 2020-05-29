import { Component, OnInit } from "@angular/core";
import { ValidateService } from "../services/validate.service";
import { AuthService } from "../services/auth.service";
import { NgFlashMessageService } from "ng-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  correo: String;
  contrasena: String;
  nombre: String;
  apellidoPaterno: String;
  apellidoMaterno: String;
  constructor(
    private validateService: ValidateService,
    private auth: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onRegisterSubmit() {
    const user = {
      nombre: this.nombre,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      correo: this.correo,
      contrasena: this.contrasena,
    };
    console.log(user);
    //
    if (!this.validateService.validateRegister(user)) {
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Por favor complete todos los campos"],
        dismissible: true,
        timeout: 3000,
        type: "danger",
      });
      return false;
    }
    if (!this.validateService.validateEmail(user.correo)) {
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Por favor ingrese un correo valido"],
        dismissible: true,
        timeout: 3000,
        type: "danger",
      });
      return false;
    }

    this.auth.registerUser(user).subscribe((data: any) => {
      if (data.success) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["¡Cuenta registrada!"],
          dismissible: true,
          timeout: 3000,
          type: "success",
        });
        this.router.navigate(["/login"]);
      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Ocurrio un error"],
          dismissible: true,
          timeout: 3000,
          type: "danger",
        });
        this.router.navigate(["/sign-up"]);
      }
    });
  }
}
