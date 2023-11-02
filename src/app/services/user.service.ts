import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.apiUrl
  constructor(
    private httpClient: HttpClient
  ) { }
  getCurrentuserDetails() {
    return this.httpClient.get(this.url)
  }
}
