import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username:string;
  private clientId = 'd4aa6bb96c29d45718c2';
  private clientSecret = '9292bfe8d9a8c049d3ed2ed1905d5bfd9ffb3e3f';

  constructor(private _http: Http){

    console.log('Github service ready....');
    this.username = 'venkatiiitb';

  }

  getUser(){

    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.clientId+'&client_secret='+this.clientSecret)
      .map(res => res.json());

  }

  getRepos(){

    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.clientId+'&client_secret='+this.clientSecret)
      .map(res => res.json());

  }

  updateUser(username){

    this.username = username;

  }

}
