import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "@app/rxjs";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "src/environments/environment";
import { Product } from "src/types/products.types";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private baseUrl = environment.appUrl;
  private readonly http = inject(HttpClient);
  private readonly translate = inject(TranslateService);

  findAll(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.baseUrl}api/products`, {
      params: { lng: this.translate.currentLang },
    });
  }

  findBySlug(slug: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}api/products/${slug}`, {
      params: { lng: this.translate.currentLang },
    });
  }
}
