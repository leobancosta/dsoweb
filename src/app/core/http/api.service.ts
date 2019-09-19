import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL: string;
  private httpHeaders;

  constructor(private http: HttpClient) {
    this.baseURL = environment.baseURL;
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',//'x-www-form-urlencoded',
      'Authorization': environment.token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
    });
  }

  private apiURL(urlEndpoint: string): string {
    return this.baseURL.trim().toLowerCase() + urlEndpoint.trim().toLowerCase();
  }

  createGetRequest(endpoint: string, params: HttpParams) {

    const options = {
      headers: this.httpHeaders,
      params: params
    }
    return this.http.get(
      this.apiURL(endpoint),
      options,
    );
    
  }

  createPostRequest(endpoint: string, requestBody: object) {
    const options = {
      headers: this.httpHeaders
    }
    console.log(requestBody);
    return this.http.post(this.apiURL(endpoint), requestBody, options);
  }

}
