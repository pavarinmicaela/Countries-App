import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];
  isError: boolean = false;

  constructor(private countryService: CountryService) { }

  activateRegion(region: string) {
    if (region === this.activeRegion) { return };
    this.activeRegion = region;
    this.countryService.searchByRegion(region)
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

  getCSSClass(region: string): string {
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}
