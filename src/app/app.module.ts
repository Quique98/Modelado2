import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgFlashMessagesModule } from "ng-flash-messages";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { LongInComponent } from "./long-in/long-in.component";
import { HeaderComponent } from "./header/header.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./guard/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LongInComponent,
    HeaderComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFlashMessagesModule,
    HttpClientModule,
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
