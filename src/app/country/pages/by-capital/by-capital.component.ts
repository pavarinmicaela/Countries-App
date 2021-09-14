import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {

  query: string;
  isError: boolean = false;
  countries: Country[] = [];
  placeholder: string = "Ingrese una capital...";

  constructor(private countryService: CountryService) { }

  search(query: string) {
    this.isError = false;
    this.query = query;
    this.countryService.searchByCapital(this.query)
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
