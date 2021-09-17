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
  suggestedCountries: Country[] = [];
  showSuggestion: boolean = false;

  constructor(private countryService: CountryService) { }

  search(query: string) {
    this.isError = false;
    this.query = query;
    this.showSuggestion = false;
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
    this.query = query;
    this.showSuggestion = true;

    this.countryService.searchByName(query)
      .subscribe(
        countries => { this.suggestedCountries = countries.splice(0, 5); },
        error => {
          this.isError = true;
          this.suggestedCountries = [];
        }
      );
  }

}
