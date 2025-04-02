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
