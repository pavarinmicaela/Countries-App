import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  country: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryByCode(id)),
        tap(console.log) //pasa como parámetro a console.log() la respuesta de switchMap() y ejecuta la función
      )
      .subscribe(country => this.country = country);
  }

  /* this.activatedRoute.params
    .subscribe(({ id }) => {
      console.log(id);
      this.countryService.getCountryByCode(id)
        .subscribe(country => {
          console.log(country);
        });
    }); */
}
