import { LanguageSwitcherComponent } from "../language-switcher/language-switcher.component";
import { MenuComponent } from "../menu/menu.component";
import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  imports: [MenuComponent, LanguageSwitcherComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {}
