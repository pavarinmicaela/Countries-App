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

  constructor(private countryService: CountryService) { }

  search() {
    this.isError = false;
    this.countryService.searchCountry(this.query)
      .subscribe(
        (response) => {
          this.countries = response;
          console.log(this.countries);
        },
        (error) => {
          this.isError = true;
          this.countries = [];
        }
      );
  }

}
