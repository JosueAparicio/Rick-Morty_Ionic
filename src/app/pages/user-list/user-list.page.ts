import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  API: string = 'https://rickandmortyapi.com/api/';
  characters: any;
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this._http.get<any>(`${this.API}character`).subscribe(data => {
      // console.log(data);
      this.characters = data.results;

    });
  }
}
