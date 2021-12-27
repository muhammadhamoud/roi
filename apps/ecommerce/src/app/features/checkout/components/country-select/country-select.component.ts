import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

import { Country } from './../../../../data/models/country';
import { CountryService } from './../../../../data/services/country.service';



@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'roinsight-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss']
})
export class CountrySelectComponent implements OnInit {

 country = 'Country';
  countries: Country[] = [];
  @Output() setCountryEvent = new EventEmitter<string>();

  constructor(private countriesServ: CountryService) { }

  ngOnInit() {
    this.countriesServ.getCountries()
      .subscribe(
        countries => {
          this.countries = countries;
        }
      );
  }

  setCountry(value: Country) {
    this.country = value.name || '';
    this.setCountryEvent.emit(value.code);
  }
}

