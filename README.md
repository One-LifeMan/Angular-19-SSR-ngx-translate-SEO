# Angular + SSR + Ngx-translate

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

# Table of contents:

- [Angular + SSR + Ngx-translate](#angular--ssr--ngx-translate)
- [Table of contents:](#table-of-contents)
  - [Create a new workspace](#create-a-new-workspace)
  - [Add linters and code formatter (optionally)](#add-linters-and-code-formatter-optionally)
    - [Install packages](#install-packages)
    - [Create configuration files](#create-configuration-files)
    - [Configure settings.json](#configure-settingsjson)
    - [Format all files in the project](#format-all-files-in-the-project)
  - [Create an initial project structure](#create-an-initial-project-structure)
    - [Generate components \& environments](#generate-components--environments)
    - [Configure environments](#configure-environments)
      - [src\\environments\\environment.ts](#srcenvironmentsenvironmentts)
      - [src\\environments\\environment.development.ts](#srcenvironmentsenvironmentdevelopmentts)
    - [Add another environment type](#add-another-environment-type)
      - [Create environment.watch.ts](#create-environmentwatchts)
      - [Edit angular.json](#edit-angularjson)
      - [Edit package.json](#edit-packagejson)
    - [Configure paths](#configure-paths)
      - [Create export files](#create-export-files)
      - [src\\app\\layouts\\index.ts](#srcapplayoutsindexts)
      - [src\\app\\pages\\index.ts](#srcapppagesindexts)
      - [tsconfig.json](#tsconfigjson)
      - [app.routes.ts](#approutests)
    - [Make changes to components](#make-changes-to-components)
      - [src\\app\\](#srcapp)
        - [app.component.html](#appcomponenthtml)
      - [src\\app\\layouts\\client-layout\\](#srcapplayoutsclient-layout)
        - [client-layout.component.html](#client-layoutcomponenthtml)
        - [client-layout.component.ts](#client-layoutcomponentts)
      - [src\\app\\ui\\client\\footer\\](#srcappuiclientfooter)
        - [footer.component.html](#footercomponenthtml)
      - [src\\app\\ui\\client\\header\\](#srcappuiclientheader)
        - [header.component.html](#headercomponenthtml)
        - [header.component.ts](#headercomponentts)
      - [src\\app\\ui\\client\\menu\\](#srcappuiclientmenu)
        - [menu.component.html](#menucomponenthtml)
        - [menu.component.ts](#menucomponentts)
      - [src\\app\\ui\\client\\language-switcher\\](#srcappuiclientlanguage-switcher)
        - [language-switcher.component.html](#language-switchercomponenthtml)
        - [language-switcher.component.ts](#language-switchercomponentts)
    - [Let's add some styles (optional)](#lets-add-some-styles-optional)
      - [Install @csstools/normalize.css](#install-csstoolsnormalizecss)
      - [Create style files (optional)](#create-style-files-optional)
        - [src/app/styles/variables.scss](#srcappstylesvariablesscss)
        - [src/app/styles/theme.scss](#srcappstylesthemescss)
      - [src\\styles.scss](#srcstylesscss)
      - [client-layout.component.scss](#client-layoutcomponentscss)
      - [footer.component.scss](#footercomponentscss)
      - [header.component.scss](#headercomponentscss)
      - [menu.component.scss](#menucomponentscss)
      - [language-switcher.component.scss](#language-switchercomponentscss)

## Create a new workspace

```bash
ng new angular-ssr-ngx-translate --package-manager=pnpm
```

Which stylesheet format would you like to use?
✔️ Sass (SCSS)
Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?
✔️ Yes
Would you like to use the Server Routing and App Engine APIs (Developer Preview) for this server application?
✔️ No

## Add linters and code formatter (optionally)

### Install packages

```bash
pnpm add -D eslint @eslint/js angular-eslint typescript-eslint eslint-config-prettier eslint-plugin-prettier prettier prettier-plugin-organize-attributes @trivago/prettier-plugin-sort-imports stylelint stylelint-config-standard-scss stylelint-scss stylelint-prettier stylelint-order
```

### Create configuration files

- .prettierignore
- .prettierrc
- .stylelintrc.json
- eslint.config.js

### Configure settings.json

```json
{
  // === FORMATTER & LINTING ===
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.requireConfig": true,
  "prettier.configPath": ".prettierrc",
  // -------------------------------------
  "eslint.enable": true,
  "eslint.format.enable": true,
  "eslint.validate": ["javascript", "typescript", "html"],
  "eslint.useFlatConfig": true,
  "eslint.workingDirectories": ["../src"],
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  },
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  },
  // -------------------------------------
  "stylelint.enable": true,
  "stylelint.validate": ["css", "scss"],
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "explicit"
    }
  },
  "[css]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "explicit"
    }
  }
}
```

### Format all files in the project

```bash
pnpx prettier --write .
```

## Create an initial project structure

### Generate components & environments

```bash
ng g c layouts/client-layout
ng g c pages/client/home
ng g c pages/client/about
ng g c pages/not-found-page
ng g c ui/client/header
ng g c ui/client/footer
ng g c ui/client/menu
ng g c ui/client/language-switcher
ng generate environments
```

### Configure environments

#### src\environments\environment.ts

```ts
export const environment = {
  production: true,
  languages: ["en", "uk"],
  appUrl: "/",
};
```

#### src\environments\environment.development.ts

```ts
export const environment = {
  production: true,
  languages: ["en", "uk"],
  appUrl: "http://localhost:4200/",
};
```

### Add another environment type

Why?
Because to run both frontend and backend in development mode you need to run the scripts `"watch"` and `"serve:ssr:angular-ssr-ngx-translate"`, but in development mode `environment.appUrl` = "http://localhost:4200/", and the server will be started at "http://localhost:4000". Because of this mismatch, requests to the server where `environment.appUrl` will be used - will not work!
Therefore, I decided to create a separate environment type for the script `"watch"`.
I am sure that there may be other solutions, but I chose this.

#### Create environment.watch.ts

```bash
touch src/environments/environment.watch.ts
```

```ts
export const environment = {
  production: true,
  languages: ["en", "uk"],
  appUrl: "http://localhost:4000/",
};
```

#### Edit angular.json

Add the "watch" configuration to projects.angular-ssr-ngx-translate.architect.build.configurations.
These are the same settings as for "development", except that "src/environments/environment.ts" is changed to "src/environments/environment.watch.ts" instead of "src/environments/environment.development.ts".

```json
{
  ...
  "projects": {
    "angular-ssr-ngx-translate": {
      ...
      "architect": {
        "build": {
          ...
          "configurations": {
            ...
            "watch": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true,
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.watch.ts"
                }
              ]
            }
          }
          ...
        }
        ...
      }
    }
  }
}
```

#### Edit package.json

replace "development" with "watch" in the script of the same name "watch"

```json
...
"watch": "ng build --watch --configuration watch",
...
```

### Configure paths

#### Create export files

```bash
touch src/app/layouts/index.ts
touch src/app/pages/index.ts
```

#### src\app\layouts\index.ts

```ts
export * from "./client-layout/client-layout.component";
```

#### src\app\pages\index.ts

```ts
export * from "./client/home/home.component";
export * from "./client/about/about.component";
export * from "./not-found-page/not-found-page.component";
```

#### tsconfig.json

```json
{
  ...
  "compilerOptions": {
    ...
    "baseUrl": "./",
    "paths": {
      "@app/layouts": ["src/app/layouts/index.ts"],
      "@app/pages": ["src/app/pages/index.ts"],
    }
  }
  ...
}
```

#### app.routes.ts

```ts
import { Routes } from "@angular/router";

const loadClientLayout = () => import("@app/layouts").then(c => c.ClientLayoutComponent);

const loadHome = () => import("@app/pages").then(c => c.HomeComponent);
const loadAbout = () => import("@app/pages").then(c => c.AboutComponent);

const loadNotFoundPage = () => import("@app/pages").then(c => c.NotFoundPageComponent);

export const routes: Routes = [
  {
    path: "",
    loadComponent: loadClientLayout,
    children: [
      { path: "", loadComponent: loadHome },
      { path: "about", loadComponent: loadAbout },
      { path: "404", loadComponent: loadNotFoundPage },
    ],
  },
  { path: "**", redirectTo: "/404" },
];
```

### Make changes to components

#### src\app\

##### app.component.html

```html
<router-outlet></router-outlet>
```

#### src\app\layouts\client-layout\

##### client-layout.component.html

```html
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
```

##### client-layout.component.ts

```ts
...
imports: [HeaderComponent, FooterComponent, RouterOutlet],
...
```

#### src\app\ui\client\footer\

##### footer.component.html

```html
<footer class="footer">
  <div class="container">
    <div class="footer__inner">
      <p>footer works!</p>
    </div>
  </div>
</footer>
```

#### src\app\ui\client\header\

##### header.component.html

```html
<header class="header">
  <app-menu></app-menu>
  <app-language-switcher></app-language-switcher>
</header>
```

##### header.component.ts

```ts
...
  imports: [MenuComponent, LanguageSwitcherComponent],
...
```

#### src\app\ui\client\menu\

##### menu.component.html

```html
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item">
      <a
        class="nav__link"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLink="/"
        routerLinkActive="active"
        >Home</a
      >
    </li>
    <li class="nav__item">
      <a
        class="nav__link"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLink="/about"
        routerLinkActive="active"
        >About</a
      >
    </li>
  </ul>
</nav>
```

##### menu.component.ts

```ts
...
  imports: [RouterLink, RouterLinkActive],
...
```

#### src\app\ui\client\language-switcher\

##### language-switcher.component.html

```html
<ul class="lang-switcher">
  @for (lang of languages; track lang) {
  <li class="lang-switcher__item">
    <a
      class="lang-switcher__link"
      [routerLinkActiveOptions]="{ exact: true }"
      routerLink="/{{ lang }}/{{ currentUrl }}"
      routerLinkActive="active"
    >
      {{ lang }}
    </a>
  </li>
  } @empty {
  <li>List of supported languages not found</li>
  }
</ul>
```

##### language-switcher.component.ts

```ts
import { environment } from "../../../../environments/environment";
import { filter } from "../../../shared/rxjs";
import { Component, inject } from "@angular/core";
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-language-switcher",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./language-switcher.component.html",
  styleUrl: "./language-switcher.component.scss",
})
export class LanguageSwitcherComponent {
  private readonly router = inject(Router);
  languages = environment.languages;
  protected currentUrl = "";

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.setCurrentUrl());
  }

  private setCurrentUrl = () => {
    // Later here will be the language switching logic
  };
}
```

### Let's add some styles (optional)

#### Install @csstools/normalize.css

```bash
pnpm add @csstools/normalize.css
```

#### Create style files (optional)

```bash
mkdir src/app/styles
touch src/app/styles/_variables.scss
touch src/app/styles/_theme.scss
```

##### src/app/styles/variables.scss

```scss
:root {
  --gap-small: 4px;
  --gap-medium: 8px;
}
```

##### src/app/styles/theme.scss

```scss
:root {
  --primary-color: #ccc;
  --on-primary-color: #000;
  --secondary-color: #ffffe0;
  --on-secondary-color: #000;
  --accent-color: #ffa500;
}
```

#### src\styles.scss

```scss
/* You can add global styles to this file, and also import other style files */

@use "@csstools/normalize.css";
@use "./app/styles/theme";
@use "./app/styles/variables";

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: var(--on-primary-color);
  background-color: var(--primary-color);
}

ul,
ol {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (hover: hover) {
  a:hover {
    color: var(--accent-color);
  }
}

.container {
  max-width: 1220px;
  padding: 0 10px;
}
```

#### client-layout.component.scss

```scss
:host {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.container {
  flex: 1 1 0;
}
```

#### footer.component.scss

```scss
.footer {
  color: var(--primary-color);
  background-color: var(--on-primary-color);

  &__inner {
  }
}
```

#### header.component.scss

```scss
.header {
  color: var(--on-secondary-color);
  background-color: var(--secondary-color);

  &__inner {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
  }
}
```

#### menu.component.scss

```scss
.nav {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-small);
    align-items: center;
  }

  &__item {
  }

  &__link {
    display: flex;
    padding-top: var(--gap-small);
    padding-right: var(--gap-medium);
    padding-bottom: var(--gap-small);
    padding-left: var(--gap-medium);

    &.active {
      color: var(--accent-color);
      background-color: var(--on-secondary-color);
    }
  }
}

@media (hover: hover) {
  .nav {
    &__link {
      &:hover {
        color: var(--primary-color);
        background-color: var(--on-primary-color);
      }
    }
  }
}
```

#### language-switcher.component.scss

```scss
.lang-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-small);

  &__item {
  }

  &__link {
    padding: var(--gap-small);

    &.active {
      color: var(--accent-color);
      background-color: var(--on-secondary-color);
    }
  }
}

@media (hover: hover) {
  .lang-switcher {
    &__item {
    }

    &__link {
      &:hover {
        color: var(--primary-color);
        background-color: var(--on-primary-color);
      }
    }
  }
}
```
