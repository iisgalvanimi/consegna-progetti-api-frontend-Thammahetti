import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(public http: HttpClient) {}
  data!: Object;
  loading!: boolean;
  o! :Observable<Object>;

}