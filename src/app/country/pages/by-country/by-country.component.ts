import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  query: string;
  isError: boolean = false;
  countries: Country[] = [];
  placeholder: string = "Ingrese un país...";

  constructor(private countryService: CountryService) { }

  search(query: string) {
    this.isError = false;
    this.query = query;
    this.countryService.searchByName(this.query)
      .subscribe(
        (response) => {
          this.countries = response;
        },
        (error) => {
          this.isError = true;
          this.countries = [];
        }
      );
  }

  suggestion(query: string) {
    this.isError = false;
  }

}
