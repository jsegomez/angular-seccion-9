import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country-interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {
  @Input() countries!: Country[];
}
