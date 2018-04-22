import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { GithubItem } from '../github-item';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items: GithubItem[];
  searchControl = new FormControl();

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(query => {
      this.searchService.search(query).subscribe(items => this.items = items);
    });
  }
}
