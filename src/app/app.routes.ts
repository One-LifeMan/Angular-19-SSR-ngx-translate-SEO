import { Routes } from "@angular/router";

const loadClientLayout = () => import("@app/layouts").then(c => c.ClientLayoutComponent);

const loadHome = () => import("@app/pages").then(c => c.HomeComponent);
const loadAbout = () => import("@app/pages").then(c => c.AboutComponent);
const loadProducts = () => import("@app/pages").then(c => c.ProductsComponent);
const loadProductDetails = () => import("@app/pages").then(c => c.ProductDetailsComponent);

const loadNotFoundPage = () => import("@app/pages").then(c => c.NotFoundPageComponent);

export const routes: Routes = [
  {
    path: "",
    loadComponent: loadClientLayout,
    children: [
      { path: "", loadComponent: loadHome },
      { path: "about", loadComponent: loadAbout },
      {
        path: "products",
        children: [
          { path: "", loadComponent: loadProducts },
          { path: ":slug", loadComponent: loadProductDetails },
        ],
      },
      { path: "404", loadComponent: loadNotFoundPage },
    ],
  },
  { path: "**", redirectTo: "/404" },
];
