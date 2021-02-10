import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  API: string = 'https://rickandmortyapi.com/api/character/';
  profileId: string;
  character: any;
  constructor(
    private _arouter: ActivatedRoute,
    private _http: HttpClient
    ) { }

  ngOnInit() {
    this.profileId = this._arouter.snapshot.paramMap.get('id');
    this._http.get<any>(`${this.API}${this.profileId}`).subscribe(data =>{
     // console.log(data);
      this.character = data;
    });
  }

}
