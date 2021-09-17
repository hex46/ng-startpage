import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  textSearch: FormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log('allo', this.textSearch.valid);
    if (this.textSearch.valid) {
      const value = this.textSearch.value;
      const searchURL = `https://duckduckgo.com/?q=${value}`;

      document.location.replace(searchURL);
    }
  }

}
