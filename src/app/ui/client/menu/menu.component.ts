import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { LocalizeRouterPipe } from "@gilsdav/ngx-translate-router";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-menu",
  imports: [RouterLink, RouterLinkActive, TranslatePipe, LocalizeRouterPipe],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
})
export class MenuComponent {}
