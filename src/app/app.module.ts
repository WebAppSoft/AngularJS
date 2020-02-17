import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "../app/header/header.component";
import { HomeComponent } from "../app/home/home.component";
import { AuthComponent } from "../app/auth/auth.component";
import { LoadingSpinnerComponent } from "../app/shared/loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "../app/shared/placeholder/placeholder.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
