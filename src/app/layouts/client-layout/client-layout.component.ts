import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "src/app/ui/client/footer/footer.component";
import { HeaderComponent } from "src/app/ui/client/header/header.component";

@Component({
  selector: "app-client-layout",
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: "./client-layout.component.html",
  styleUrl: "./client-layout.component.scss",
})
export class ClientLayoutComponent {}
