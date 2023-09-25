import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IBGEService {
  private apiUrl = 'https://brasilapi.com.br/api/ibge/uf/v1';

  constructor(private http: HttpClient) {}

  getFederativeUnit(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFU_By_Region(): Observable<{ [regionId: string]: any[] }> {
    return this.getFederativeUnit().pipe(
      map((FederativeUnits) => {
        const federativeunit_By_Region: { [regionId: string]: any[] } = {
          '1': [], // Norte
          '2': [], // Nordeste
          '3': [], // Sudeste
          '4': [], // Sul
          '5': [], // Centro-Oeste
        };

        FederativeUnits.forEach((FU) => {
          federativeunit_By_Region[FU.regiao.id.toString()].push(FU);
        });

        return federativeunit_By_Region;
      })
    );
  }

  getCities_By_Acronym(acronym: string): Observable<any> {
    const url = `https://brasilapi.com.br/api/ibge/municipios/v1/${acronym}?providers=dados-abertos-br,gov,wikipedia`;
    return this.http.get<any>(url);
  }
}