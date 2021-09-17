import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL: string = 'https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient) { }

  searchByName(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${query}`;

    return this.http.get<Country[]>(url);
  }

  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${query}`;

    return this.http.get<Country[]>(url);
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${region}`;

    return this.http.get<Country[]>(url);
  }

  getCountryByCode(code: string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${code}`;

    return this.http.get<Country>(url);
  }

}
