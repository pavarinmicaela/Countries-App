import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-countries-searcher',
  templateUrl: './countries-searcher.component.html',
  styleUrls: ['./countries-searcher.component.css']
})
export class CountriesSearcherComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = "";

  debouncer: Subject<string> = new Subject();

  query: string;

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(response => {
        this.onDebounce.emit(this.query);
      });
  }

  search() {
    this.onEnter.emit(this.query);
  }

  pressedKey() {
    this.debouncer.next(this.query);
  }

}
